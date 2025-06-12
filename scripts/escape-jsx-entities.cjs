const fs = require('fs');
const path = require('path');

const fileExtensions = ['.js', '.jsx', '.ts', '.tsx'];

function escapeEntitiesInText(text) {
  return text.replace(/>([^<]*?)</g, (match, p1) => {
    let replaced = p1
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
    return '>' + replaced + '<';
  });
}

function processFile(filePath) {
  // Only process files!
  if (!fs.statSync(filePath).isFile()) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const newContent = escapeEntitiesInText(content);
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Escaped entities in: ${filePath}`);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
    const entry = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      walkDir(entry);
    } else if (dirent.isFile() && fileExtensions.includes(path.extname(entry))) {
      processFile(entry);
    }
  });
}

walkDir('.');

console.log('Entity escaping completed. Review changes with git diff before committing!');