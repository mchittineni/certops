#!/usr/bin/env node

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

// Sent on every response so the dev server matches the production hosting
// headers in `_headers`. Anything that works locally must work when deployed.
//
// style-src allows 'unsafe-inline' because views set per-provider brand colors
// through style="--brand: #..." attributes (src/views/brand.js). Safari does not
// support style-src-attr, so the narrower directive would break styling there.
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data:",
  "connect-src 'self'",
  "manifest-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'none'",
  "form-action 'none'",
  "object-src 'none'"
].join('; ');

const SECURITY_HEADERS = {
  'Content-Security-Policy': CSP,
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'no-referrer',
  'X-Frame-Options': 'DENY',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()'
};

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD', 'Content-Type': 'text/plain', ...SECURITY_HEADERS });
    res.end('405 Method Not Allowed');
    return;
  }

  let reqPath;
  try {
    reqPath = decodeURIComponent(req.url.split('?')[0].split('#')[0]);
  } catch {
    res.writeHead(400, { 'Content-Type': 'text/plain', ...SECURITY_HEADERS });
    res.end('400 Bad Request');
    return;
  }
  // A NUL byte truncates the path inside some syscalls — reject rather than normalise.
  if (reqPath.includes('\0')) {
    res.writeHead(400, { 'Content-Type': 'text/plain', ...SECURITY_HEADERS });
    res.end('400 Bad Request');
    return;
  }
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(__dirname, reqPath);

  // Never serve outside the project directory. path.join already collapses
  // '..' segments; realpath below also closes the symlink-escape case.
  if (!filePath.startsWith(__dirname + path.sep)) {
    res.writeHead(403, { 'Content-Type': 'text/plain', ...SECURITY_HEADERS });
    res.end('403 Forbidden');
    return;
  }

  fs.realpath(filePath, (realErr, realPath) => {
    if (realErr || !realPath.startsWith(__dirname + path.sep)) {
      res.writeHead(realErr ? 404 : 403, { 'Content-Type': 'text/plain', ...SECURITY_HEADERS });
      res.end(realErr ? '404 Not Found' : '403 Forbidden');
      return;
    }

    fs.stat(realPath, (err, stats) => {
      if (err || !stats.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain', ...SECURITY_HEADERS });
        res.end('404 Not Found');
        return;
      }

      const ext = path.extname(realPath);
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType, ...SECURITY_HEADERS });
      if (req.method === 'HEAD') {
        res.end();
        return;
      }
      fs.createReadStream(realPath).pipe(res);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Converge running at http://localhost:${PORT}`);
});
