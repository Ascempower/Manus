#!/usr/bin/env node

/**
 * Parallel prebuild script for faster execution
 * Runs lint, type-check, and PWA validation simultaneously
 */

const { spawn } = require('child_process');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function runCommand(command, args = [], name) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const child = spawn(command, args, {
      stdio: 'pipe',
      shell: true,
      cwd: process.cwd(),
    });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', data => {
      stdout += data.toString();
    });

    child.stderr.on('data', data => {
      stderr += data.toString();
    });

    child.on('close', code => {
      const duration = Date.now() - startTime;
      if (code === 0) {
        log(`✅ ${name} completed in ${duration}ms`, colors.green);
        resolve({ name, duration, stdout, stderr });
      } else {
        log(`❌ ${name} failed in ${duration}ms`, colors.red);
        if (stderr) console.error(stderr);
        reject(new Error(`${name} failed with code ${code}`));
      }
    });

    child.on('error', error => {
      log(`❌ ${name} error: ${error.message}`, colors.red);
      reject(error);
    });
  });
}

async function runParallelChecks() {
  log('🚀 Running prebuild checks in parallel...', colors.blue);
  const startTime = Date.now();

  const tasks = [
    runCommand('pnpm', ['run', 'lint:fast'], 'ESLint'),
    runCommand('pnpm', ['run', 'type-check:fast'], 'TypeScript'),
    runCommand('pnpm', ['run', 'validate-pwa:fast'], 'PWA Validation'),
  ];

  try {
    const results = await Promise.all(tasks);
    const totalTime = Date.now() - startTime;

    log(`\n🎉 All checks completed successfully in ${totalTime}ms`, colors.green);

    // Show individual timings
    results.forEach(result => {
      log(`  • ${result.name}: ${result.duration}ms`, colors.blue);
    });

    return true;
  } catch (error) {
    log(`\n💥 Prebuild checks failed: ${error.message}`, colors.red);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  runParallelChecks();
}

module.exports = { runParallelChecks };
