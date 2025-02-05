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
      // 如果是blog目录下的子目录，确保创建index.html
      if (fullPath.includes('/blog/') && !item.endsWith('.html')) {
        const indexPath = path.join(fullPath, 'index.html');
        const txtPath = path.join(fullPath, 'index.txt');
        if (fs.existsSync(txtPath)) {
          fs.renameSync(txtPath, indexPath);
          console.log(`Renamed: ${txtPath} -> ${indexPath}`);
        }
      }
      processDirectory(fullPath);
    } else if (stat.isFile() && item.endsWith('.txt')) {
      // 如果是blog目录下的txt文件，将其移动到同名目录下的index.html
      if (fullPath.includes('/blog/')) {
        const dirPath = fullPath.replace(/\.txt$/, '');
        const indexPath = path.join(dirPath, 'index.html');
        
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }
        
        fs.renameSync(fullPath, indexPath);
        console.log(`Renamed and moved: ${fullPath} -> ${indexPath}`);
      } else {
        const newPath = fullPath.replace(/\.txt$/, '.html');
        fs.renameSync(fullPath, newPath);
        console.log(`Renamed: ${fullPath} -> ${newPath}`);
      }
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

