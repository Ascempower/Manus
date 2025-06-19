#!/usr/bin/env node

/**
 * Blog Image Validation Script
 * Validates that all blog images exist and are properly mapped
 */

const fs = require('fs');
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

function validateImageExists(imagePath) {
  const fullPath = path.join(process.cwd(), 'public', imagePath);
  return fs.existsSync(fullPath);
}

function findBlogImageReferences() {
  const blogDir = path.join(process.cwd(), 'src', 'app', 'blog');
  const references = [];

  function scanDirectory(dir) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const imageMatches = content.match(/src="\/images\/blog\/([^"]+)"/g);

        if (imageMatches) {
          imageMatches.forEach(match => {
            const imageName = match.match(/src="\/images\/blog\/([^"]+)"/)[1];
            references.push({
              file: path.relative(process.cwd(), filePath),
              imageName,
              fullPath: `/images/blog/${imageName}`,
            });
          });
        }
      }
    });
  }

  scanDirectory(blogDir);
  return references;
}

function main() {
  log('🔍 Validating blog images...', colors.blue);

  // Check blog post references
  log('\n📄 Checking blog post image references:', colors.blue);
  const references = findBlogImageReferences();

  let validCount = 0;
  let missingCount = 0;

  references.forEach(ref => {
    const exists = validateImageExists(ref.fullPath);

    if (exists) {
      validCount++;
      log(`  ✅ ${ref.file}: ${ref.imageName}`, colors.green);
    } else {
      missingCount++;
      log(`  ❌ ${ref.file}: ${ref.imageName} (MISSING)`, colors.red);
    }
  });

  // Check for available images
  log('\n🗂️  Available blog images:', colors.blue);
  const blogImagesDir = path.join(process.cwd(), 'public', 'images', 'blog');

  if (fs.existsSync(blogImagesDir)) {
    const actualFiles = fs
      .readdirSync(blogImagesDir)
      .filter(file => file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.webp'));

    actualFiles.forEach(file => {
      log(`  📁 ${file}`, colors.blue);
    });
  } else {
    log('  ⚠️  Blog images directory not found', colors.yellow);
  }

  // Summary
  log('\n📊 Summary:', colors.blue);
  log(`  Blog post references: ${references.length}`, colors.blue);
  log(`  Valid images: ${validCount}`, colors.green);
  log(`  Missing images: ${missingCount}`, colors.red);

  if (missingCount > 0) {
    log(`\n❌ ${missingCount} images are missing!`, colors.red);
    process.exit(1);
  } else {
    log('\n🎉 All blog images are available!', colors.green);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main };
