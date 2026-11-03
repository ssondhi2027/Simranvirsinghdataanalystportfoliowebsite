import { defineConfig } from 'vite';

export default defineConfig({
  // three.js is its own lazy chunk (~130 kB gzip); the warning threshold is raised to match.
  build: { target: 'es2020', chunkSizeWarningLimit: 600 },
});
