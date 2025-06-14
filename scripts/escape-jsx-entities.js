const fs = require('fs');
const path = require('path');

const fileExtensions = ['.js', '.jsx', '.ts', '.tsx'];

function escapeEntitiesInText(text) {
  // Escape only double and single quotes that are between > and < (i.e., in JSX text nodes)
  // This is a simplified approach and may need refinement for edge cases
  return text.replace(/>([^<]*?)</g, (match, p1) => {
    let replaced = p1
      .replace(/"/g, '"')
      .replace(/'/g, ''');
    return '>' + replaced + '<';
  });
}

function processFile(filePath) {
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
    } else if (fileExtensions.includes(path.extname(entry))) {
      processFile(entry);
    }
  });
}

// Change '.' to your src directory if you want to limit scope
walkDir('.');

console.log('Entity escaping completed. Review changes with git diff before committing!');