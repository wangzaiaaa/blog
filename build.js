const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 递归处理目录中的所有.txt文件
function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (stat.isFile() && item.endsWith('.txt')) {
      const newPath = fullPath.replace(/\.txt$/, '.html');
      fs.renameSync(fullPath, newPath);
      console.log(`Renamed: ${fullPath} -> ${newPath}`);
    }
  }
}

// Run the Next.js build
execSync('next build', { stdio: 'inherit' });

// 确保out目录存在
const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 处理构建输出目录中的.txt文件
processDirectory(outDir);

// 复制_routes.json到out目录
fs.copyFileSync(
  path.join(process.cwd(), '_routes.json'),
  path.join(outDir, '_routes.json')
);

console.log('Build process completed.');

