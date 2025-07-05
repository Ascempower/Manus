const fs = require('fs');
const path = require('path');

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy out directory to dist for deploy previews
const outDir = path.join(__dirname, '..', 'out');
const distDir = path.join(__dirname, '..', 'dist');

if (fs.existsSync(outDir)) {
  // Remove existing dist directory
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
  }
  
  // Copy out to dist
  copyDir(outDir, distDir);
  console.log('✅ Build files copied to dist/ directory for deploy preview');
} else {
  console.error('❌ out/ directory not found. Make sure to run build first.');
  process.exit(1);
}