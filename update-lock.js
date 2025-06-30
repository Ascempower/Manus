// This script will update the package.json and regenerate the pnpm-lock.yaml file
const fs = require('fs');
const { execSync } = require('child_process');

// Read the new package.json
const newPackageJson = fs.readFileSync('./package.json.new', 'utf8');

// Write it to package.json
fs.writeFileSync('./package.json', newPackageJson);

console.log('Updated package.json with new dependencies');

// Run pnpm install to update the lock file
try {
  console.log('Running pnpm install to update lock file...');
  execSync('pnpm install', { stdio: 'inherit' });
  console.log('Lock file updated successfully');
} catch (error) {
  console.error('Error updating lock file:', error);
  process.exit(1);
}