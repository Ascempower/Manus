#!/usr/bin/env node

/**
 * Pre-build Check Script
 *
 * This script runs before building to check for common issues that might cause
 * runtime errors or build failures.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Running pre-build checks...');

// Check Node version
const nodeVersion = process.version;
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const requiredNodeVersion = packageJson.engines?.node || '20.x';

console.log(`Node version: ${nodeVersion}`);
if (!nodeVersion.startsWith('v' + requiredNodeVersion.replace(/\.x$/, ''))) {
  console.warn(
    `⚠️ Warning: Using Node ${nodeVersion}, but package.json requires ${requiredNodeVersion}`
  );
  console.warn(
    'This might cause compatibility issues. Consider using the recommended Node version.'
  );
}

// Check for critical files
console.log('\nChecking for critical files...');
const criticalFiles = [
  'src/lib/analytics.ts',
  'src/lib/hipaa-compliance.ts',
  'src/lib/markdown-links.ts',
  'src/lib/internal-links.ts',
  'src/components/compliance/LazyCompliance.tsx',
  'src/components/analytics/GoogleAnalytics.tsx',
  'src/components/ErrorBoundary.tsx',
  'src/lib/browser-utils.ts',
  'src/types/global.d.ts',
];

let missingFiles = false;
criticalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.error(`❌ ${file} is missing`);
    missingFiles = true;
  }
});

if (missingFiles) {
  console.error('\n❌ Some critical files are missing. Build might fail.');
} else {
  console.log('\n✅ All critical files exist.');
}

// Check for ESLint warnings
try {
  console.log('\nChecking for ESLint warnings...');
  const lintOutput = execSync('npx next lint --quiet', {
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'ignore'],
  });
  if (lintOutput.includes('Warning:') || lintOutput.includes('warning')) {
    console.warn('⚠️ ESLint warnings found. Consider fixing them for better code quality.');
    console.warn('Run "npx next lint --fix" to automatically fix some issues.');
  } else {
    console.log('✅ No ESLint warnings found.');
  }
} catch (error) {
  if (error.stdout && (error.stdout.includes('Warning:') || error.stdout.includes('warning'))) {
    console.warn('⚠️ ESLint warnings found. Consider fixing them for better code quality.');
    console.warn('Run "npx next lint --fix" to automatically fix some issues.');
  } else {
    console.error('❌ ESLint check failed:', error.message);
  }
}

// Check for TypeScript errors
try {
  console.log('\nChecking for TypeScript errors...');
  execSync('npx tsc --noEmit', { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
  console.log('✅ No TypeScript errors found.');
} catch (error) {
  console.error('❌ TypeScript check failed. Fix TypeScript errors before building:');
  console.error(error.stdout || error.message);
  process.exit(1);
}

// Check critical CSS integration
console.log('\nChecking critical CSS integration...');
const layoutFile = fs.existsSync('src/app/layout.tsx')
  ? fs.readFileSync('src/app/layout.tsx', 'utf8')
  : '';
const criticalCssFile = fs.existsSync('src/app/critical.css');

if (criticalCssFile && !layoutFile.includes('critical.css')) {
  console.warn('⚠️ Critical CSS file exists but might not be properly integrated in layout.tsx');
} else if (criticalCssFile) {
  console.log('✅ Critical CSS integration looks good.');
} else {
  console.log('ℹ️ No critical CSS file found. Consider generating one for better performance.');
}

// Check for potential runtime errors
console.log('\nChecking for potential runtime error patterns...');

// Function to check files for potential issues
function checkFilesForIssues(directory, fileExtensions = ['.js', '.jsx', '.ts', '.tsx']) {
  const issues = [];

  function scanDirectory(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
      const fullPath = path.join(dir, file.name);

      if (file.isDirectory()) {
        // Skip node_modules and .next directories
        if (file.name !== 'node_modules' && file.name !== '.next') {
          scanDirectory(fullPath);
        }
      } else if (fileExtensions.some(ext => file.name.endsWith(ext))) {
        const content = fs.readFileSync(fullPath, 'utf8');

        // Check for direct localStorage access without try/catch
        if (
          content.includes('localStorage.') &&
          !content.includes('try {') &&
          !content.includes('safeLocalStorage')
        ) {
          issues.push(`${fullPath}: Unprotected localStorage access`);
        }

        // Check for direct document.querySelector without checks
        if (
          (content.includes('document.querySelector') ||
            content.includes('document.getElementById')) &&
          !content.includes("typeof document !== 'undefined'") &&
          !content.includes('safeDocumentAccess')
        ) {
          issues.push(`${fullPath}: Unprotected document access`);
        }

        // Check for window.gtag without checks
        if (
          content.includes('window.gtag') &&
          !content.includes("typeof window !== 'undefined'") &&
          !content.includes('safeWindowAccess')
        ) {
          issues.push(`${fullPath}: Unprotected window.gtag access`);
        }

        // Check for unsafe type assertions
        if (content.includes('as any')) {
          issues.push(`${fullPath}: Unsafe 'as any' type assertion`);
        }
      }
    }
  }

  try {
    scanDirectory(directory);
  } catch (error) {
    console.error('Error scanning files:', error);
  }

  return issues;
}

// Check src directory for potential issues
const potentialIssues = checkFilesForIssues('src');

if (potentialIssues.length > 0) {
  console.warn('⚠️ Potential runtime error patterns found:');
  potentialIssues.forEach(issue => console.warn(`  - ${issue}`));
  console.warn('Consider fixing these issues to prevent runtime errors.');
} else {
  console.log('✅ No common runtime error patterns found.');
}

console.log('\n✅ Pre-build checks completed.');

// Exit with success if we got this far
process.exit(0);
