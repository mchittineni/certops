#!/usr/bin/env node
/**
 * Smoke tests for the static server in server.js: security headers on every
 * response, and the path handling that keeps it from serving the filesystem.
 * Boots the real server on an ephemeral port — no mocks.
 */
import { spawn } from 'child_process';
import assert from 'assert';
import net from 'net';

let passed = 0;
async function check(name, fn) {
  try {
    await fn();
    console.log(`  ok  ${name}`);
    passed++;
  } catch (e) {
    console.error(`  FAIL  ${name}\n        ${e.message}`);
    process.exitCode = 1;
  }
}

function freePort() {
  return new Promise((resolve, reject) => {
    const srv = net.createServer();
    srv.on('error', reject);
    srv.listen(0, '127.0.0.1', () => {
      const { port } = srv.address();
      srv.close(() => resolve(port));
    });
  });
}

function waitForServer(url, tries = 60) {
  return new Promise((resolve, reject) => {
    const attempt = async n => {
      try {
        await fetch(url);
        resolve();
      } catch (e) {
        if (n <= 0) return reject(new Error(`server never came up: ${e.message}`));
        setTimeout(() => attempt(n - 1), 50);
      }
    };
    attempt(tries);
  });
}

/** Raw socket request, so we can send paths fetch() would normalise away. */
function rawGet(port, target, method = 'GET') {
  return new Promise((resolve, reject) => {
    const socket = net.connect(port, '127.0.0.1', () => {
      socket.write(`${method} ${target} HTTP/1.1\r\nHost: 127.0.0.1\r\nConnection: close\r\n\r\n`);
    });
    let data = '';
    socket.setEncoding('utf8');
    socket.on('data', c => { data += c; });
    socket.on('end', () => resolve(data));
    socket.on('error', reject);
  });
}

const port = await freePort();
const base = `http://127.0.0.1:${port}`;
const child = spawn(process.execPath, ['server.js'], {
  env: { ...process.env, PORT: String(port) },
  stdio: 'ignore'
});

try {
  await waitForServer(base);

  await check('index.html carries every security header', async () => {
    const res = await fetch(base + '/');
    assert.equal(res.status, 200);
    for (const h of [
      'content-security-policy',
      'x-content-type-options',
      'referrer-policy',
      'x-frame-options',
      'cross-origin-opener-policy',
      'permissions-policy'
    ]) {
      assert.ok(res.headers.get(h), `missing ${h}`);
    }
    assert.equal(res.headers.get('x-content-type-options'), 'nosniff');
    assert.equal(res.headers.get('x-frame-options'), 'DENY');
  });

  await check('the CSP allows exactly what the app needs and nothing more', async () => {
    const csp = (await fetch(base + '/')).headers.get('content-security-policy') || '';
    assert.match(csp, /default-src 'self'/);
    assert.match(csp, /script-src 'self'/);
    assert.ok(csp.includes('https://fonts.googleapis.com'), 'CSP must include fonts.googleapis.com');
    assert.ok(csp.includes('https://fonts.gstatic.com'), 'CSP must include fonts.gstatic.com');
    assert.match(csp, /frame-ancestors 'none'/);
    assert.match(csp, /object-src 'none'/);
    // A wildcard or an inline-script escape would defeat the whole policy.
    assert.ok(!/script-src[^;]*unsafe-inline/.test(csp), "script-src must not allow 'unsafe-inline'");
    assert.ok(!/default-src[^;]*\*/.test(csp), 'default-src must not use a wildcard');
  });

  await check('error responses are hardened too', async () => {
    const res = await fetch(base + '/does-not-exist.js');
    assert.equal(res.status, 404);
    assert.ok(res.headers.get('content-security-policy'), '404 has no CSP');
  });

  await check('module scripts are served with a JS content type', async () => {
    const res = await fetch(base + '/src/app.js');
    assert.equal(res.status, 200);
    assert.match(res.headers.get('content-type'), /application\/javascript/);
  });

  await check('a traversal path cannot escape the project directory', async () => {
    const raw = await rawGet(port, '/../../../../etc/passwd');
    assert.match(raw, /^HTTP\/1\.1 (403|404)/, raw.split('\r\n')[0]);
    assert.ok(!/root:/.test(raw), 'served /etc/passwd');
  });

  await check('an encoded traversal path is rejected the same way', async () => {
    const raw = await rawGet(port, '/%2e%2e%2f%2e%2e%2f%2e%2e%2fetc%2fpasswd');
    assert.match(raw, /^HTTP\/1\.1 (403|404)/, raw.split('\r\n')[0]);
    assert.ok(!/root:/.test(raw), 'served /etc/passwd');
  });

  await check('a NUL byte in the path is a 400, not a truncated read', async () => {
    const raw = await rawGet(port, '/index.html%00.png');
    assert.match(raw, /^HTTP\/1\.1 400/, raw.split('\r\n')[0]);
  });

  await check('write methods are refused', async () => {
    const raw = await rawGet(port, '/index.html', 'DELETE');
    assert.match(raw, /^HTTP\/1\.1 405/, raw.split('\r\n')[0]);
    assert.match(raw, /Allow: GET, HEAD/);
  });

  await check('HEAD returns headers with no body', async () => {
    const res = await fetch(base + '/', { method: 'HEAD' });
    assert.equal(res.status, 200);
    assert.equal((await res.text()).length, 0);
    assert.ok(res.headers.get('content-security-policy'));
  });

  console.log(`\n${passed} server checks passed`);
} finally {
  child.kill('SIGTERM');
}
