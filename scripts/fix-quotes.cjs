// Run with: node fix-quotes.cjs

const fs = require('fs');
const path = require('path');

const exts = ['.js', '.jsx', '.ts', '.tsx'];
const entityToChar = {
  '&quot;': '"',
  '&apos;': "'",
  '&#39;': "'",
  '&lsquo;': "'",
  '&rsquo;': "'",
  '&ldquo;': '"',
  '&rdquo;': '"',
};

function fixEntities(content) {
  let out = content;
  for (const [entity, char] of Object.entries(entityToChar)) {
    out = out.split(entity).join(char);
  }
  return out;
}

function processFile(filePath) {
  if (!fs.statSync(filePath).isFile()) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const updated = fixEntities(content);
  if (content !== updated) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log('Fixed:', filePath);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
    const entry = path.join(dir, dirent.name);
    if (dirent.isDirectory()) walkDir(entry);
    else if (dirent.isFile() && exts.includes(path.extname(entry))) processFile(entry);
  });
}

walkDir('./src');
console.log('Done. Please review with git diff before commit.');