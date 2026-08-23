const fs = require('fs');
const path = require('path');
const root = path.normalize(process.cwd());
const files = [];
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.tsx') || (e.name.endsWith('.ts') && !e.name.endsWith('.d.ts'))) files.push(path.normalize(path.resolve(p)));
  }
}
walk('src');
function findImports(code) {
  const re = /(?:from\s+['"]([^'"]+)['"]|import\s+['"]([^'"]+)['"])/g;
  const out = [];
  let m;
  while ((m = re.exec(code))) out.push(m[1] || m[2]);
  return out;
}
function resolve(spec, fromFile) {
  let target;
  if (spec.startsWith('@/')) target = path.normalize(path.resolve(root, 'src', spec.slice(2)));
  else if (spec.startsWith('.')) target = path.normalize(path.resolve(path.dirname(fromFile), spec));
  else return null;
  const cands = [target + '.tsx', target + '.ts', path.join(target, 'index.tsx'), path.join(target, 'index.ts')];
  for (const c of cands) if (fs.existsSync(c) && fs.statSync(c).isFile()) return path.normalize(path.resolve(c));
  return null;
}
const referenced = new Set();
for (const f of files) {
  const code = fs.readFileSync(f, 'utf8');
  for (const spec of findImports(code)) {
    const r = resolve(spec, f);
    if (r) referenced.add(r);
  }
}
let dead = 0;
for (const f of files) {
  if (f.includes(path.join('src', 'app'))) continue;
  if (!referenced.has(f)) { dead++; console.log('DEAD:', f.replace(root + path.sep, '').replace(/\\/g,'/')); }
}
console.log('--- dead count:', dead);
