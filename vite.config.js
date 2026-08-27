import { defineConfig } from 'vite';

// BASE_PATH lets the same build target a root domain ('/') or a GitHub Pages
// project subpath ('/converge/'). Vite rewrites the absolute /src/... URLs in
// index.html to match, so nothing in the app needs to know where it is hosted.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  build: {
    target: 'es2020',
    // One chunk per content pack — see docs/adr/0001-content-architecture.md.
    // A pack must never be inlined into the entry bundle.
    assetsInlineLimit: 0,
    reportCompressedSize: true
  }
});
