import { Mail, Linkedin, Github, Download } from 'lucide-react';

export function CTA() {
  return (
    <section id="contact" className="wf-band wf-band--gold">
      <div className="wf-shell">
        <h2 className="wf-band-heading">Let's build something useful.</h2>
        <p className="wf-band-sub">
          Open to Data Analyst, Analytics Engineering and BI opportunities in Canada.
        </p>
        <div className="wf-cta-links">
          <a href="mailto:simranvirsondhi2708@gmail.com" className="wf-cta-link">
            <Mail size={16} />
            simranvirsondhi2708@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/simranvir-singh-s-300254136/"
            target="_blank"
            rel="noopener noreferrer"
            className="wf-cta-link"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/ssondhi2027"
            target="_blank"
            rel="noopener noreferrer"
            className="wf-cta-link"
          >
            <Github size={16} />
            GitHub
          </a>
          <a href="/resume.pdf" download className="wf-cta-link">
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
