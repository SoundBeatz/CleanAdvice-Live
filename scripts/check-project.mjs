import { access } from 'node:fs/promises';

const requiredPaths = [
  'package.json',
  'next.config.js',
  'app/layout.jsx',
  'app/page.jsx',
  'app/globals.css',
  'components/CleanAdviceCall.jsx',
  'components/MvpNavigation.jsx',
  'app/api/health/route.js',
  'app/api/token/route.js',
  'app/api/diagnostics/route.js',
  'app/diagnostics/page.jsx'
];

const missing = [];

for (const path of requiredPaths) {
  try {
    await access(path);
  } catch {
    missing.push(path);
  }
}

if (missing.length > 0) {
  console.error('Missing required project files:');
  for (const path of missing) console.error(`- ${path}`);
  process.exit(1);
}

console.log(`Project structure check passed (${requiredPaths.length} files).`);
