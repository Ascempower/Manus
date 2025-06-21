#!/usr/bin/env node

/**
 * Conditional prebuild script
 * Skips prebuild checks if SKIP_PREBUILD environment variable is set
 */

const { spawn } = require('child_process');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function runCommand(command, args = []) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: true,
      cwd: process.cwd(),
    });

    child.on('close', code => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with code ${code}`));
      }
    });

    child.on('error', error => {
      reject(error);
    });
  });
}

async function main() {
  // Check if prebuild should be skipped
  if (process.env.SKIP_PREBUILD === 'true') {
    log('⚡ Skipping prebuild checks (SKIP_PREBUILD=true)', colors.yellow);
    log('🚀 Building directly...', colors.blue);
    return;
  }

  // Run fast prebuild
  try {
    log('🔄 Running fast prebuild checks...', colors.blue);

    // Update cache version (fast mode)
    await runCommand('node', ['scripts/update-cache-version.js', '--fast']);

    // Run parallel checks
    await runCommand('node', ['scripts/prebuild-parallel.js']);

    log('✅ Prebuild completed successfully', colors.green);
  } catch (error) {
    log(`❌ Prebuild failed: ${error.message}`, colors.red);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main };
