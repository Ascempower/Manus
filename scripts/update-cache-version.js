#!/usr/bin/env node

/**
 * Script to automatically update cache version numbers
 * Run this before each deployment to ensure cache clearing
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function generateVersion() {
  const now = new Date();
  const major = now.getFullYear();
  const minor = now.getMonth() + 1;
  const patch = now.getDate();
  const build =
    now.getHours().toString().padStart(2, '0') + now.getMinutes().toString().padStart(2, '0');

  return `v${major}.${minor}.${patch}.${build}`;
}

function updateServiceWorker() {
  const swPath = path.join(process.cwd(), 'public', 'sw.js');

  if (!fs.existsSync(swPath)) {
    log('Service worker not found, skipping...', colors.yellow);
    return null;
  }

  let content = fs.readFileSync(swPath, 'utf8');
  const newVersion = generateVersion();

  // Update version in service worker
  content = content.replace(
    /const CACHE_VERSION = '[^']+';/,
    `const CACHE_VERSION = '${newVersion}';`
  );

  fs.writeFileSync(swPath, content);
  if (!process.argv.includes('--fast')) {
    log(`✅ Service worker updated to version: ${newVersion}`, colors.green);
  }

  return newVersion;
}

function updateVersionAPI() {
  const apiPath = path.join(process.cwd(), 'src', 'app', 'api', 'version', 'route.ts');

  if (!fs.existsSync(apiPath)) {
    log('Version API not found, skipping...', colors.yellow);
    return;
  }

  let content = fs.readFileSync(apiPath, 'utf8');
  const newVersion = generateVersion();

  // Update version in API
  content = content.replace(/const APP_VERSION = '[^']+';/, `const APP_VERSION = '${newVersion}';`);

  fs.writeFileSync(apiPath, content);
  if (!process.argv.includes('--fast')) {
    log(`✅ Version API updated to: ${newVersion}`, colors.green);
  }
}

function updatePackageJson() {
  const packagePath = path.join(process.cwd(), 'package.json');

  if (!fs.existsSync(packagePath)) {
    log('package.json not found, skipping...', colors.yellow);
    return;
  }

  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  const newVersion = generateVersion();

  // Add build time to package.json
  packageJson.buildTime = new Date().toISOString();
  packageJson.cacheVersion = newVersion;

  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
  if (!process.argv.includes('--fast')) {
    log(`✅ Package.json updated with build time`, colors.green);
  }
}

function main() {
  const fastMode = process.argv.includes('--fast');

  if (!fastMode) {
    log(`${colors.blue}🔄 Updating cache versions...${colors.reset}`);
  }

  const version = updateServiceWorker();
  updateVersionAPI();
  updatePackageJson();

  if (version && !fastMode) {
    log(`${colors.green}🎉 Cache version updated to: ${version}${colors.reset}`);
    log(
      `${colors.blue}💡 This will force all users to get fresh content on next visit${colors.reset}`
    );
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { updateServiceWorker, updateVersionAPI, generateVersion };
