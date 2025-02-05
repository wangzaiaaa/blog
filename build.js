const { execSync } = require('child_process');

// Run the Next.js build
execSync('next build', { stdio: 'inherit' });

console.log('Build process completed.');

