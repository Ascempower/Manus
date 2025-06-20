#!/usr/bin/env node

/**
 * Verify Playwright Removal
 * This script checks if Playwright has been completely removed from the project
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Playwright Removal...\n');

// Check package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
let packageJson = {};

try {
  const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
  packageJson = JSON.parse(packageJsonContent);
  console.log('✅ package.json found');
} catch (error) {
  console.log('❌ Could not read package.json');
  process.exit(1);
}

// Check for Playwright in dependencies
let playwrightFound = false;

if (packageJson.dependencies && packageJson.dependencies['@playwright/test']) {
  console.log('❌ @playwright/test found in dependencies');
  playwrightFound = true;
}

if (packageJson.devDependencies && packageJson.devDependencies['@playwright/test']) {
  console.log('❌ @playwright/test found in devDependencies');
  playwrightFound = true;
}

if (!playwrightFound) {
  console.log('✅ @playwright/test not found in dependencies');
}

// Check for Playwright scripts
const playwrightScripts = [];
if (packageJson.scripts) {
  Object.keys(packageJson.scripts).forEach(scriptName => {
    if (packageJson.scripts[scriptName].includes('playwright')) {
      playwrightScripts.push(scriptName);
    }
  });
}

if (playwrightScripts.length > 0) {
  console.log(`❌ Playwright scripts found: ${playwrightScripts.join(', ')}`);
} else {
  console.log('✅ No Playwright scripts found');
}

// Check for Playwright config file
const configFiles = ['playwright.config.ts', 'playwright.config.js', 'playwright.config.mjs'];
let configFound = false;

configFiles.forEach(configFile => {
  const configPath = path.join(process.cwd(), configFile);
  if (fs.existsSync(configPath)) {
    console.log(`❌ ${configFile} still exists`);
    configFound = true;
  }
});

if (!configFound) {
  console.log('✅ No Playwright config files found');
}

// Check for tests directory
const testsDir = path.join(process.cwd(), 'tests');
if (fs.existsSync(testsDir)) {
  console.log('❌ tests directory still exists');
} else {
  console.log('✅ tests directory removed');
}

// Check for any remaining Playwright files
const playwrightFiles = [];
function findPlaywrightFiles(dir) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        findPlaywrightFiles(filePath);
      } else if (file.includes('playwright') || file.includes('.spec.')) {
        playwrightFiles.push(filePath);
      }
    });
  } catch (error) {
    // Ignore errors for directories we can't read
  }
}

findPlaywrightFiles(process.cwd());

if (playwrightFiles.length > 0) {
  console.log('❌ Playwright-related files found:');
  playwrightFiles.forEach(file => console.log(`   ${file}`));
} else {
  console.log('✅ No Playwright-related files found');
}

// Summary
console.log('\n📋 Playwright Removal Summary:');
const allGood = !playwrightFound && playwrightScripts.length === 0 && !configFound && playwrightFiles.length === 0;

if (allGood) {
  console.log('🎉 SUCCESS: Playwright has been completely removed!');
  console.log('\n✅ Removed items:');
  console.log('   - @playwright/test dependency');
  console.log('   - Playwright test scripts');
  console.log('   - playwright.config.ts');
  console.log('   - tests/ directory');
  console.log('\n🚀 Your project is now Playwright-free and ready to build!');
} else {
  console.log('⚠️  WARNING: Some Playwright remnants may still exist');
  console.log('Please review the items marked with ❌ above');
}

console.log('\n📦 Next steps:');
console.log('1. Run: pnpm install (to ensure clean dependencies)');
console.log('2. Run: pnpm run build (to verify project builds correctly)');
console.log('3. Deploy your application');