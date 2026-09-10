#!/usr/bin/env node
/**
 * Tests for sanitizeHtml, which renders the inline formatting inside flashcard
 * backs and explanations.
 *
 * This is the one place the app puts content into innerHTML rather than escaping
 * it, so it is the only path where a bad string becomes markup. The suite pins
 * both halves of the contract: the allowlisted tags still render, and nothing
 * else can produce a tag or carry an attribute.
 *
 * The earlier implementation stripped anything that did not look allowed, and
 * the "regressions" block below is the set of inputs that defeated it.
 */
import assert from 'assert';
import { sanitizeHtml, escapeHtml } from '../src/views/ui.js';

let passed = 0;
const check = (name, fn) => {
  fn();
  console.log(`  ok  ${name}`);
  passed++;
};

check('allowlisted formatting is preserved', () => {
  assert.equal(
    sanitizeHtml('<strong>Multi-AZ</strong> uses <code>failover</code>'),
    '<strong>Multi-AZ</strong> uses <code>failover</code>'
  );
  assert.equal(sanitizeHtml('a<br>b'), 'a<br>b');
  assert.equal(sanitizeHtml('<em>async</em>'), '<em>async</em>');
});

check('self-closing and uppercase tags are normalised', () => {
  assert.equal(sanitizeHtml('line<br/>break'), 'line<br>break');
  assert.equal(sanitizeHtml('<BR />x'), '<br>x');
  assert.equal(sanitizeHtml('<STRONG>loud</STRONG>'), '<strong>loud</strong>');
});

check('empty input is handled', () => {
  assert.equal(sanitizeHtml(''), '');
  assert.equal(sanitizeHtml(null), '');
  assert.equal(sanitizeHtml(undefined), '');
});

// Regressions. Each of these was mishandled by the strip-what-looks-wrong
// implementation this replaced.
check('an allowed tag cannot smuggle an attribute', () => {
  const out = sanitizeHtml('<p onclick="alert(1)">hi</p>');
  assert.ok(!out.includes('<p onclick'), 'event handler survived on an allowed tag');
  assert.ok(out.includes('&lt;p onclick'), 'the opening tag should be escaped, not dropped');
});

check('disallowed tags are escaped rather than executed', () => {
  for (const payload of [
    '<img src=x onerror=alert(1)>',
    '<script>alert(1)</script>',
    '<iframe src="javascript:alert(1)"></iframe>',
    '<svg/onload=alert(1)>'
  ]) {
    const out = sanitizeHtml(payload);
    assert.ok(!/<(img|script|iframe|svg)/i.test(out), `tag survived: ${payload} -> ${out}`);
  }
});

check('a tag cannot be reassembled out of the surrounding text', () => {
  const out = sanitizeHtml('<scr<script>ipt>alert(1)</scr</script>ipt>');
  assert.ok(!/<script/i.test(out), `reassembled a script tag: ${out}`);
});

check('prose containing angle brackets survives intact', () => {
  // Real strings from the banks. The old sanitizer deleted these outright,
  // because a generic type or a comparison reads as a tag to a regex.
  assert.equal(sanitizeHtml('Map<string, string> holds it'), 'Map&lt;string, string&gt; holds it');
  assert.equal(sanitizeHtml('replication lag < 1s'), 'replication lag &lt; 1s');
  assert.equal(sanitizeHtml('files <3m rows'), 'files &lt;3m rows');
});

check('output only ever contains allowlisted tags', () => {
  const inputs = [
    '<a href="https://example.com">link</a>',
    '<strong onmouseover="x">bold</strong>',
    '<p><span style="x">y</span></p>',
    '<<strong>>nested<</strong>>',
    '<strong class="a">t</strong>'
  ];
  for (const input of inputs) {
    for (const tag of sanitizeHtml(input).match(/<\/?[a-z0-9-]+[^>]*>/gi) || []) {
      assert.ok(
        /^<\/?(strong|em|code|kbd|ul|ol|li|p|br)>$/i.test(tag),
        `unexpected tag ${tag} from ${input}`
      );
    }
  }
});

check('escapeHtml still escapes every metacharacter', () => {
  assert.equal(escapeHtml(`<&>"'`), '&lt;&amp;&gt;&quot;&#39;');
  assert.equal(escapeHtml(null), '');
});

console.log(`\n${passed} sanitizer checks passed`);
