#!/usr/bin/env node

/**
 * Simple build test script
 */

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔍 Testing build fixes...\n');

// Test 1: Check if duplicate content is removed from markdown-links.ts
console.log('1. Checking markdown-links.ts for duplicates...');
const markdownLinksContent = fs.readFileSync('src/lib/markdown-links.ts', 'utf8');
const exportDefaultCount = (markdownLinksContent.match(/export default/g) || []).length;
const markdownLinkPatternsCount = (markdownLinksContent.match(/MARKDOWN_LINK_PATTERNS/g) || [])
  .length;

if (exportDefaultCount === 1) {
  console.log('   ✅ Single export default found');
} else {
  console.log(`   ❌ Multiple export defaults found: ${exportDefaultCount}`);
}

if (markdownLinkPatternsCount <= 3) {
  // Declaration, usage, export
  console.log('   ✅ No duplicate MARKDOWN_LINK_PATTERNS');
} else {
  console.log(`   ❌ Possible duplicate MARKDOWN_LINK_PATTERNS: ${markdownLinkPatternsCount}`);
}

// Test 2: Check analytics.ts for internalLinkClicked method
console.log('\n2. Checking analytics.ts for internalLinkClicked method...');
const analyticsContent = fs.readFileSync('src/lib/analytics.ts', 'utf8');
const hasInternalLinkClicked = analyticsContent.includes('internalLinkClicked:');

if (hasInternalLinkClicked) {
  console.log('   ✅ internalLinkClicked method found');
} else {
  console.log('   ❌ internalLinkClicked method missing');
}

// Test 3: Check React imports in key files
console.log('\n3. Checking React imports...');
const filesToCheck = [
  'src/components/compliance/LazyCompliance.tsx',
  'src/components/content/ContentLinks.tsx',
  'src/components/navigation/InternalNavigation.tsx',
  'src/components/performance/PerformanceMonitor.tsx',
  'src/hooks/useIntersectionObserver.ts',
];

let reactImportIssues = 0;
filesToCheck.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const hasReactImport = content.includes("from 'react'") || content.includes('from "react"');
    const hasUseEffect = content.includes('useEffect');
    const hasUseState = content.includes('useState');

    if ((hasUseEffect || hasUseState) && !hasReactImport) {
      console.log(`   ❌ ${file}: Uses React hooks but missing React import`);
      reactImportIssues++;
    } else {
      console.log(`   ✅ ${file}: React imports look good`);
    }
  } else {
    console.log(`   ⚠️  ${file}: File not found`);
  }
});

// Test 4: Check package.json for React
console.log('\n4. Checking package.json for React...');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const hasReact = packageJson.dependencies && packageJson.dependencies.react;
const hasReactDom = packageJson.dependencies && packageJson.dependencies['react-dom'];

if (hasReact && hasReactDom) {
  console.log(`   ✅ React ${packageJson.dependencies.react} and ReactDOM found`);
} else {
  console.log('   ❌ React or ReactDOM missing from dependencies');
}

// Summary
console.log('\n📊 Summary:');
console.log(`   Export defaults: ${exportDefaultCount === 1 ? '✅' : '❌'}`);
console.log(`   Analytics method: ${hasInternalLinkClicked ? '✅' : '❌'}`);
console.log(`   React imports: ${reactImportIssues === 0 ? '✅' : '❌'}`);
console.log(`   React dependencies: ${hasReact && hasReactDom ? '✅' : '❌'}`);

const allGood =
  exportDefaultCount === 1 &&
  hasInternalLinkClicked &&
  reactImportIssues === 0 &&
  hasReact &&
  hasReactDom;

if (allGood) {
  console.log('\n🎉 All fixes look good! Build should work now.');
} else {
  console.log('\n⚠️  Some issues remain. Check the details above.');
}
