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

// Import the blog images mapping
const blogImagesPath = path.join(process.cwd(), 'src', 'lib', 'blog-images.ts');
let BLOG_IMAGES = {};

try {
  const content = fs.readFileSync(blogImagesPath, 'utf8');
  
  // Extract BLOG_IMAGES object from the file
  const match = content.match(/export const BLOG_IMAGES = \{([\s\S]*?)\} as const;/);
  if (match) {
    const imageEntries = match[1].match(/'([^']+)':\s*'([^']+)'/g);
    if (imageEntries) {
      imageEntries.forEach(entry => {
        const [, key, value] = entry.match(/'([^']+)':\s*'([^']+)'/);
        BLOG_IMAGES[key] = value;
      });
    }
  }
} catch (error) {
  log(`❌ Error reading blog images mapping: ${error.message}`, colors.red);
  process.exit(1);
}

function validateImageExists(imagePath) {
  const fullPath = path.join(process.cwd(), 'public', imagePath);
  return fs.existsSync(fullPath);
}

function findBlogImageReferences() {
  const blogDir = path.join(process.cwd(), 'src', 'app', 'blog');
  const references = [];
  
  function scanDirectory(dir) {
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
              fullPath: `/images/blog/${imageName}`
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
  
  let totalImages = 0;
  let validImages = 0;
  let missingImages = 0;
  let mappedImages = 0;
  
  // Check mapped images
  log('\n📋 Checking mapped images:', colors.blue);
  Object.entries(BLOG_IMAGES).forEach(([key, imagePath]) => {
    totalImages++;
    const exists = validateImageExists(imagePath);
    
    if (exists) {
      validImages++;
      mappedImages++;
      log(`  ✅ ${key} → ${imagePath}`, colors.green);
    } else {
      missingImages++;
      log(`  ❌ ${key} → ${imagePath} (MISSING)`, colors.red);
    }
  });
  
  // Check blog post references
  log('\n📄 Checking blog post image references:', colors.blue);
  const references = findBlogImageReferences();
  
  references.forEach(ref => {
    const filename = ref.imageName;
    const isMapped = filename in BLOG_IMAGES;
    const actualPath = isMapped ? BLOG_IMAGES[filename] : ref.fullPath;
    const exists = validateImageExists(actualPath);
    
    if (exists && isMapped) {
      log(`  ✅ ${ref.file}: ${filename} (mapped)`, colors.green);
    } else if (exists && !isMapped) {
      log(`  ⚠️  ${ref.file}: ${filename} (exists but not mapped)`, colors.yellow);
    } else if (!exists && isMapped) {
      log(`  ❌ ${ref.file}: ${filename} (mapped but missing)`, colors.red);
    } else {
      log(`  ❌ ${ref.file}: ${filename} (missing and not mapped)`, colors.red);
    }
  });
  
  // Check for unused images
  log('\n🗂️  Checking for unused blog images:', colors.blue);
  const blogImagesDir = path.join(process.cwd(), 'public', 'images', 'blog');
  
  if (fs.existsSync(blogImagesDir)) {
    const actualFiles = fs.readdirSync(blogImagesDir).filter(file => 
      file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.webp')
    );
    
    const referencedFiles = new Set([
      ...Object.keys(BLOG_IMAGES),
      ...references.map(ref => ref.imageName)
    ]);
    
    actualFiles.forEach(file => {
      if (!referencedFiles.has(file)) {
        log(`  ⚠️  Unused image: ${file}`, colors.yellow);
      }
    });
  }
  
  // Summary
  log('\n📊 Summary:', colors.blue);
  log(`  Total mapped images: ${Object.keys(BLOG_IMAGES).length}`, colors.blue);
  log(`  Valid mapped images: ${mappedImages}`, colors.green);
  log(`  Missing mapped images: ${missingImages}`, colors.red);
  log(`  Blog post references: ${references.length}`, colors.blue);
  
  if (missingImages > 0) {
    log(`\n❌ ${missingImages} images are missing!`, colors.red);
    process.exit(1);
  } else {
    log('\n🎉 All blog images are properly configured!', colors.green);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main };#!/usr/bin/env node

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

// Import the blog images mapping
const blogImagesPath = path.join(process.cwd(), 'src', 'lib', 'blog-images.ts');
let BLOG_IMAGES = {};

try {
  const content = fs.readFileSync(blogImagesPath, 'utf8');

  // Extract BLOG_IMAGES object from the file
  const match = content.match(/export const BLOG_IMAGES = \{([\s\S]*?)\} as const;/);
  if (match) {
    const imageEntries = match[1].match(/'([^']+)':\s*'([^']+)'/g);
    if (imageEntries) {
      imageEntries.forEach(entry => {
        const [, key, value] = entry.match(/'([^']+)':\s*'([^']+)'/);
        BLOG_IMAGES[key] = value;
      });
    }
  }
} catch (error) {
  log(`❌ Error reading blog images mapping: ${error.message}`, colors.red);
  process.exit(1);
}

function validateImageExists(imagePath) {
  const fullPath = path.join(process.cwd(), 'public', imagePath);
  return fs.existsSync(fullPath);
}

function findBlogImageReferences() {
  const blogDir = path.join(process.cwd(), 'src', 'app', 'blog');
  const references = [];

  function scanDirectory(dir) {
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

  let totalImages = 0;
  let validImages = 0;
  let missingImages = 0;
  let mappedImages = 0;

  // Check mapped images
  log('\n📋 Checking mapped images:', colors.blue);
  Object.entries(BLOG_IMAGES).forEach(([key, imagePath]) => {
    totalImages++;
    const exists = validateImageExists(imagePath);

    if (exists) {
      validImages++;
      mappedImages++;
      log(`  ✅ ${key} → ${imagePath}`, colors.green);
    } else {
      missingImages++;
      log(`  ❌ ${key} → ${imagePath} (MISSING)`, colors.red);
    }
  });

  // Check blog post references
  log('\n📄 Checking blog post image references:', colors.blue);
  const references = findBlogImageReferences();

  references.forEach(ref => {
    const filename = ref.imageName;
    const isMapped = filename in BLOG_IMAGES;
    const actualPath = isMapped ? BLOG_IMAGES[filename] : ref.fullPath;
    const exists = validateImageExists(actualPath);

    if (exists && isMapped) {
      log(`  ✅ ${ref.file}: ${filename} (mapped)`, colors.green);
    } else if (exists && !isMapped) {
      log(`  ⚠️  ${ref.file}: ${filename} (exists but not mapped)`, colors.yellow);
    } else if (!exists && isMapped) {
      log(`  ❌ ${ref.file}: ${filename} (mapped but missing)`, colors.red);
    } else {
      log(`  ❌ ${ref.file}: ${filename} (missing and not mapped)`, colors.red);
    }
  });

  // Check for unused images
  log('\n🗂️  Checking for unused blog images:', colors.blue);
  const blogImagesDir = path.join(process.cwd(), 'public', 'images', 'blog');

  if (fs.existsSync(blogImagesDir)) {
    const actualFiles = fs
      .readdirSync(blogImagesDir)
      .filter(file => file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.webp'));

    const referencedFiles = new Set([
      ...Object.keys(BLOG_IMAGES),
      ...references.map(ref => ref.imageName),
    ]);

    actualFiles.forEach(file => {
      if (!referencedFiles.has(file)) {
        log(`  ⚠️  Unused image: ${file}`, colors.yellow);
      }
    });
  }

  // Summary
  log('\n📊 Summary:', colors.blue);
  log(`  Total mapped images: ${Object.keys(BLOG_IMAGES).length}`, colors.blue);
  log(`  Valid mapped images: ${mappedImages}`, colors.green);
  log(`  Missing mapped images: ${missingImages}`, colors.red);
  log(`  Blog post references: ${references.length}`, colors.blue);

  if (missingImages > 0) {
    log(`\n❌ ${missingImages} images are missing!`, colors.red);
    process.exit(1);
  } else {
    log('\n🎉 All blog images are properly configured!', colors.green);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main };
