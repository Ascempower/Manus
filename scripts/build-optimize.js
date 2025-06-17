#!/usr/bin/env node

/**
 * Build Optimization Script
 * Handles pre-build checks, optimization, and post-build tasks
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function runCommand(command, description) {
  log(`\n${colors.blue}🔄 ${description}...${colors.reset}`);
  try {
    execSync(command, { stdio: 'inherit' });
    log(`${colors.green}✅ ${description} completed${colors.reset}`);
    return true;
  } catch (error) {
    log(`${colors.red}❌ ${description} failed${colors.reset}`);
    return false;
  }
}

function checkEnvironment() {
  log(`${colors.cyan}🔍 Checking environment...${colors.reset}`);
  
  // Check Node version
  const nodeVersion = process.version;
  log(`Node.js version: ${nodeVersion}`);
  
  // Check if .env.local exists
  const envExists = fs.existsSync('.env.local');
  log(`Environment file: ${envExists ? '✅ Found' : '⚠️  Not found'}`);
  
  // Check package manager
  const hasYarn = fs.existsSync('yarn.lock');
  const hasPnpm = fs.existsSync('pnpm-lock.yaml');
  const hasNpm = fs.existsSync('package-lock.json');
  
  let packageManager = 'npm';
  if (hasPnpm) packageManager = 'pnpm';
  else if (hasYarn) packageManager = 'yarn';
  
  log(`Package manager: ${packageManager}`);
  return { nodeVersion, envExists, packageManager };
}

function cleanBuildArtifacts() {
  log(`${colors.yellow}🧹 Cleaning build artifacts...${colors.reset}`);
  
  const dirsToClean = ['.next', 'out', 'dist', 'build', '.turbo'];
  
  dirsToClean.forEach(dir => {
    if (fs.existsSync(dir)) {
      try {
        fs.rmSync(dir, { recursive: true, force: true });
        log(`  Removed: ${dir}`);
      } catch (error) {
        log(`  Failed to remove: ${dir}`);
      }
    }
  });
}

function analyzeBundleSize() {
  log(`${colors.magenta}📊 Analyzing bundle size...${colors.reset}`);
  
  const nextDir = '.next';
  if (!fs.existsSync(nextDir)) {
    log('No build found to analyze');
    return;
  }
  
  try {
    // Get build info
    const buildManifest = path.join(nextDir, 'build-manifest.json');
    if (fs.existsSync(buildManifest)) {
      const manifest = JSON.parse(fs.readFileSync(buildManifest, 'utf8'));
      log(`Build manifest found with ${Object.keys(manifest.pages || {}).length} pages`);
    }
    
    // Check static folder size
    const staticDir = path.join(nextDir, 'static');
    if (fs.existsSync(staticDir)) {
      const stats = fs.statSync(staticDir);
      log(`Static assets directory size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
    }
  } catch (error) {
    log(`Bundle analysis failed: ${error.message}`);
  }
}

async function main() {
  log(`${colors.bright}🚀 Starting optimized build process${colors.reset}`);
  
  const startTime = Date.now();
  
  // Step 1: Environment check
  const env = checkEnvironment();
  
  // Step 2: Clean previous builds
  cleanBuildArtifacts();
  
  // Step 3: Pre-build checks
  const lintSuccess = runCommand('pnpm run lint', 'Running ESLint');
  if (!lintSuccess) {
    log(`${colors.red}Build aborted due to linting errors${colors.reset}`);
    process.exit(1);
  }
  
  const typeCheckSuccess = runCommand('pnpm run type-check', 'Type checking');
  if (!typeCheckSuccess) {
    log(`${colors.red}Build aborted due to type errors${colors.reset}`);
    process.exit(1);
  }
  
  // Step 4: Build
  const buildSuccess = runCommand('pnpm run build', 'Building application');
  if (!buildSuccess) {
    log(`${colors.red}Build failed${colors.reset}`);
    process.exit(1);
  }
  
  // Step 5: Post-build analysis
  analyzeBundleSize();
  
  // Step 6: Generate critical CSS (if script exists)
  if (fs.existsSync('scripts/generate-critical-css.cjs')) {
    runCommand('pnpm run generate-critical', 'Generating critical CSS');
  }
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  log(`${colors.green}🎉 Build completed successfully in ${duration}s${colors.reset}`);
  log(`${colors.cyan}📦 Ready for deployment!${colors.reset}`);
}

// Run the script
if (require.main === module) {
  main().catch(error => {
    log(`${colors.red}Build script failed: ${error.message}${colors.reset}`);
    process.exit(1);
  });
}

module.exports = { main, checkEnvironment, cleanBuildArtifacts };