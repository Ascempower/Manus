const fs = require('fs');
const path = require('path');

function fixReactImports(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixReactImports(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace the problematic React import
      const oldImport = 'import * as React from "react"';
      const newImport = 'import React from "react"';
      
      if (content.includes(oldImport)) {
        content = content.replace(oldImport, newImport);
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${filePath}`);
      }
    }
  });
}

// Fix imports in src directory
fixReactImports('./src');
console.log('React imports fixed!');