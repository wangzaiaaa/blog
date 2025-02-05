const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Run the Next.js build
execSync('next build', { stdio: 'inherit' });

// 确保out目录存在
const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 复制_routes.json到out目录
fs.copyFileSync(
  path.join(process.cwd(), '_routes.json'),
  path.join(outDir, '_routes.json')
);

console.log('Build process completed.');

