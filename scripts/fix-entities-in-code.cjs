// Save this as fix-entities-in-code.cjs and run with: node fix-entities-in-code.cjs

const fs = require('fs');
const path = require('path');

const exts = ['.js', '.jsx', '.ts', '.tsx'];

// Only replace HTML entities in code context, not in text nodes.
function fixEntities(content) {
  // Replace &quot; and &apos; with actual quotes
  return content
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');
}

function processFile(filePath) {
  if (!fs.statSync(filePath).isFile()) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const updated = fixEntities(content);
  if (content !== updated) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`Fixed entities in: ${filePath}`);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
    const entry = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      walkDir(entry);
    } else if (dirent.isFile() && exts.includes(path.extname(entry))) {
      processFile(entry);
    }
  });
}

// Start from current directory or change '.' to your src directory
walkDir('.');

console.log('Done. Please review your code with git diff!');