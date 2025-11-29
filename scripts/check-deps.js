const fs = require('fs');
const path = require('path');

const pkg = require('../package.json');

const deps = Object.assign({}, pkg.dependencies || {}, pkg.devDependencies || {});

const required = [
  'firebase',
  'expo',
  'expo-router',
  '@react-navigation/native',
  '@react-navigation/drawer',
];

const root = path.resolve(__dirname, '..');

function checkModule(name) {
  // prefer checking node_modules folder (more reliable for some packages like firebase)
  const nmPath = path.join(root, 'node_modules', name);
  if (fs.existsSync(nmPath)) return { ok: true, path: nmPath };
  // also try scoped names or subpaths
  try {
    const p = require.resolve(name, { paths: [root] });
    return { ok: true, path: p };
  } catch (err) {
    return { ok: false };
  }
}

console.log('Sanity check: required modules');
let missing = [];
for (const mod of required) {
  const res = checkModule(mod);
  if (res.ok) {
    console.log(`  ✓ ${mod} -> ${res.path}`);
  } else {
    console.log(`  ✗ ${mod} -> not found`);
    missing.push(mod);
  }
}

if (missing.length) {
  console.log('\nSome required modules are missing. Run `npm install` to install them.');
  process.exit(2);
} else {
  console.log('\nAll required modules are present.');
  process.exit(0);
}
