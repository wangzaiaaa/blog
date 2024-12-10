const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Run the Next.js build
execSync('next build', { stdio: 'inherit' });

// Function to recursively process directories
function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.name === 'index.txt') {
      const htmlPath = path.join(dir, 'index.html');
      fs.copyFileSync(fullPath, htmlPath);
      console.log(`Created ${htmlPath}`);
    }
  }
}

// Process the out directory
processDirectory('./out');

console.log('Build process completed.');

