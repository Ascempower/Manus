#!/usr/bin/env node

/**
 * Comprehensive React Import Verification Script
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying React imports across the project...\n');

// React hooks that require React import
const REACT_HOOKS = [
  'useState',
  'useEffect',
  'useRef',
  'useCallback',
  'useMemo',
  'useContext',
  'useReducer',
  'useLayoutEffect',
  'useImperativeHandle',
  'useDebugValue',
  'useDeferredValue',
  'useId',
  'useInsertionEffect',
  'useSyncExternalStore',
  'useTransition',
];

// Function to recursively find all TypeScript/React files
function findReactFiles(dir, files = []) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      findReactFiles(fullPath, files);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Check if file has React import
function hasReactImport(content) {
  const reactImportPatterns = [
    /import\s+React\s+from\s+['"]react['"]/,
    /import\s+\*\s+as\s+React\s+from\s+['"]react['"]/,
    /import\s+React,\s*\{[^}]*\}\s+from\s+['"]react['"]/,
    /import\s+\{[^}]*\}\s+from\s+['"]react['"]/,
  ];

  return reactImportPatterns.some(pattern => pattern.test(content));
}

// Check if file uses React hooks
function usesReactHooks(content) {
  const hookUsages = [];

  for (const hook of REACT_HOOKS) {
    const patterns = [
      new RegExp(`\\b${hook}\\s*\\(`, 'g'),
      new RegExp(`React\\.${hook}\\s*\\(`, 'g'),
    ];

    for (const pattern of patterns) {
      if (pattern.test(content)) {
        hookUsages.push(hook);
        break;
      }
    }
  }

  return hookUsages;
}

// Main verification
const srcDir = path.join(__dirname, 'src');
const files = findReactFiles(srcDir);

let totalFiles = 0;
let filesWithIssues = 0;
const issues = [];

console.log(`📁 Found ${files.length} TypeScript/React files\n`);

for (const file of files) {
  totalFiles++;
  const relativePath = path.relative(__dirname, file);
  const content = fs.readFileSync(file, 'utf8');

  const hasReact = hasReactImport(content);
  const hooks = usesReactHooks(content);

  if (hooks.length > 0 && !hasReact) {
    filesWithIssues++;
    issues.push({
      file: relativePath,
      hooks: hooks,
      hasReactImport: hasReact,
    });

    console.log(`❌ ${relativePath}`);
    console.log(`   Uses hooks: ${hooks.join(', ')}`);
    console.log(`   Has React import: ${hasReact}`);
    console.log('');
  } else if (hooks.length > 0) {
    console.log(`✅ ${relativePath} - Uses ${hooks.join(', ')} with proper React import`);
  }
}

// Summary
console.log('\n📊 Summary:');
console.log(`   Total files checked: ${totalFiles}`);
console.log(`   Files with issues: ${filesWithIssues}`);
console.log(`   Files with proper imports: ${totalFiles - filesWithIssues}`);

if (filesWithIssues === 0) {
  console.log('\n🎉 All React imports are correct!');
} else {
  console.log('\n⚠️  Issues found. Please fix the imports above.');

  // Generate fix suggestions
  console.log('\n🔧 Suggested fixes:');
  for (const issue of issues) {
    console.log(`\nFile: ${issue.file}`);
    console.log('Add this import at the top:');
    console.log(`import { ${issue.hooks.join(', ')} } from 'react';`);
  }
}

// Check package.json versions
console.log('\n📦 Checking package.json versions...');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

const reactVersion = packageJson.dependencies?.react;
const reactDomVersion = packageJson.dependencies?.['react-dom'];
const typesReactVersion = packageJson.devDependencies?.['@types/react'];
const typesReactDomVersion = packageJson.devDependencies?.['@types/react-dom'];
const typescriptVersion = packageJson.devDependencies?.typescript;

console.log(`   React: ${reactVersion || 'NOT FOUND'}`);
console.log(`   React-DOM: ${reactDomVersion || 'NOT FOUND'}`);
console.log(`   @types/react: ${typesReactVersion || 'NOT FOUND'}`);
console.log(`   @types/react-dom: ${typesReactDomVersion || 'NOT FOUND'}`);
console.log(`   TypeScript: ${typescriptVersion || 'NOT FOUND'}`);

// Check tsconfig.json
console.log('\n⚙️  Checking tsconfig.json...');
try {
  const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
  const compilerOptions = tsconfig.compilerOptions || {};

  console.log(`   jsx: ${compilerOptions.jsx || 'NOT SET'}`);
  console.log(`   esModuleInterop: ${compilerOptions.esModuleInterop || 'NOT SET'}`);
  console.log(
    `   allowSyntheticDefaultImports: ${compilerOptions.allowSyntheticDefaultImports || 'NOT SET'}`
  );
  console.log(`   module: ${compilerOptions.module || 'NOT SET'}`);

  // Recommendations
  const recommendations = [];
  if (compilerOptions.jsx !== 'preserve' && compilerOptions.jsx !== 'react-jsx') {
    recommendations.push('Set "jsx": "preserve" for Next.js or "react-jsx" for standard React');
  }
  if (!compilerOptions.esModuleInterop) {
    recommendations.push('Set "esModuleInterop": true');
  }
  if (!compilerOptions.allowSyntheticDefaultImports) {
    recommendations.push('Set "allowSyntheticDefaultImports": true');
  }

  if (recommendations.length > 0) {
    console.log('\n💡 TypeScript recommendations:');
    recommendations.forEach(rec => console.log(`   - ${rec}`));
  } else {
    console.log('   ✅ TypeScript configuration looks good!');
  }
} catch (error) {
  console.log('   ❌ Could not read tsconfig.json');
}

console.log('\n🏁 Verification complete!');
