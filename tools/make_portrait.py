"""Turn portrait.png into a background-free vector portrait at public/portrait.svg.

Usage: python tools/make_portrait.py [--scale 1.5]
"""
import argparse
import io
import re
from pathlib import Path

import numpy as np
import vtracer
from PIL import Image
from rembg import new_session, remove
from scipy import ndimage

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "portrait.png"
OUT_SVG = ROOT / "public" / "portrait.svg"
OUT_PREVIEW = ROOT / "tools" / "portrait-preview.png"
INK = (10, 15, 30)


def clean_alpha(alpha: np.ndarray) -> np.ndarray:
    mask = alpha >= 140
    labels, n = ndimage.label(mask)
    if n > 1:
        sizes = ndimage.sum(mask, labels, range(1, n + 1))
        mask = labels == (int(np.argmax(sizes)) + 1)
    return ndimage.binary_fill_holes(mask)


def main(scale: float) -> None:
    img = Image.open(SRC).convert("RGBA")
    cut = remove(img, session=new_session("u2net_human_seg"))

    rgba = np.array(cut)
    mask = clean_alpha(rgba[..., 3])
    rgba[..., 3] = np.where(mask, 255, 0).astype(np.uint8)

    ys, xs = np.where(mask)
    crop = Image.fromarray(rgba).crop((xs.min(), ys.min(), xs.max() + 1, ys.max() + 1))
    crop = crop.resize((round(crop.width * scale), round(crop.height * scale)), Image.LANCZOS)

    # Re-harden alpha after resampling so the trace gets a crisp edge.
    arr = np.array(crop)
    arr[..., 3] = np.where(arr[..., 3] >= 128, 255, 0).astype(np.uint8)
    # Pixels outside the shape get the page colour so stray fringes don't trace as bright specks.
    arr[arr[..., 3] == 0, :3] = INK
    crop = Image.fromarray(arr)

    buf = io.BytesIO()
    crop.save(buf, format="PNG")
    svg = vtracer.convert_raw_image_to_svg(
        buf.getvalue(),
        img_format="png",
        colormode="color",
        hierarchical="stacked",
        mode="spline",
        filter_speckle=6,
        color_precision=7,
        layer_difference=12,
        corner_threshold=60,
        length_threshold=4,
        max_iterations=10,
        splice_threshold=45,
        path_precision=1,
    )

    w, h = crop.size
    paths = re.findall(r"<path[^>]*/>", svg)
    out = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">'
        '<defs>'
        '<linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">'
        '<stop offset="0.72" stop-color="#fff" stop-opacity="1"/>'
        '<stop offset="0.94" stop-color="#fff" stop-opacity="0"/>'
        '</linearGradient>'
        f'<mask id="m" maskUnits="userSpaceOnUse" x="0" y="0" width="{w}" height="{h}">'
        f'<rect width="{w}" height="{h}" fill="url(#fade)"/>'
        '</mask>'
        f'<clipPath id="c"><rect width="{w}" height="{h}"/></clipPath>'
        '</defs>'
        f'<g mask="url(#m)" clip-path="url(#c)">{"".join(p for p in paths if not is_ink(p))}</g>'
        '</svg>'
    )
    OUT_SVG.write_text(out, encoding="utf-8")
    print(f"wrote {OUT_SVG} ({OUT_SVG.stat().st_size / 1024:.0f} KB, {len(paths)} paths, {w}x{h})")
    write_preview(out, w, h)


def is_ink(path: str) -> bool:
    """Drop the near-page-colour background layer vtracer emits for the transparent area."""
    m = re.search(r'fill="#([0-9A-Fa-f]{6})"', path)
    if not m:
        return False
    r, g, b = (int(m.group(1)[i:i + 2], 16) for i in (0, 2, 4))
    return abs(r - INK[0]) + abs(g - INK[1]) + abs(b - INK[2]) < 24


def write_preview(svg: str, w: int, h: int) -> None:
    try:
        import cairosvg

        png = cairosvg.svg2png(bytestring=svg.encode(), output_width=w // 2, output_height=h // 2,
                               background_color="#0A0F1E")
        OUT_PREVIEW.write_bytes(png)
        print(f"wrote {OUT_PREVIEW}")
    except (ImportError, OSError):
        if not browser_preview(w, h):
            print("preview skipped (no cairo or Chromium browser); open public/portrait.svg in a browser instead")


def browser_preview(w: int, h: int) -> bool:
    """Fallback for Windows, where cairo is rarely installed: screenshot with headless Edge/Chrome."""
    import shutil
    import subprocess

    candidates = [
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        shutil.which("chromium") or "", shutil.which("google-chrome") or "",
    ]
    exe = next((c for c in candidates if c and Path(c).exists()), None)
    if not exe:
        return False
    pw, ph = w // 2, h // 2
    page = OUT_PREVIEW.with_suffix(".html")
    page.write_text(
        f'<html><body style="margin:0;background:#0A0F1E">'
        f'<img src="{OUT_SVG.as_uri()}" width="{pw}" height="{ph}" style="display:block"></body></html>',
        encoding="utf-8",
    )
    subprocess.run([exe, "--headless=new", "--disable-gpu", "--hide-scrollbars",
                    f"--screenshot={OUT_PREVIEW}", f"--window-size={pw},{ph}", page.as_uri()],
                   capture_output=True, timeout=120)
    page.unlink(missing_ok=True)
    if OUT_PREVIEW.exists():
        print(f"wrote {OUT_PREVIEW} (via headless browser)")
        return True
    return False


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--scale", type=float, default=1.5)
    main(ap.parse_args().scale)
