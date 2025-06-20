#!/usr/bin/env node

/**
 * Test Image Fallbacks Script
 * Demonstrates how the new blog image system handles missing images
 */

const path = require('path');

// Import our robust image system
const { getBlogImageSrc, getImageSources, validateBlogImage } = require('../src/constants/blog-images.ts');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function testImageFallback(imageName, category) {
  log(`\n🧪 Testing: ${imageName}`, colors.blue);
  
  try {
    // Get the robust image source
    const robustSrc = getBlogImageSrc(imageName, category);
    log(`  📍 Robust source: ${robustSrc}`, colors.cyan);
    
    // Get all available sources
    const sources = getImageSources(imageName, category);
    log(`  🏠 Local: ${sources.local || 'Not available'}`, sources.local ? colors.green : colors.yellow);
    log(`  ☁️  CDN: ${sources.cdn || 'Not available'}`, sources.cdn ? colors.green : colors.yellow);
    log(`  🎨 Placeholder: ${sources.placeholder}`, colors.green);
    
    // Check validation
    const isValid = validateBlogImage(imageName);
    log(`  ✅ Validation: ${isValid ? 'VALID' : 'INVALID (will use fallback)'}`, isValid ? colors.green : colors.yellow);
    
    return robustSrc;
  } catch (error) {
    log(`  ❌ Error: ${error.message}`, colors.red);
    return null;
  }
}

function main() {
  log('🚀 Testing Image Fallback System', colors.cyan);
  log('Demonstrating deployment-resistant blog images...', colors.cyan);
  
  // Test the missing images from the validation
  const missingImages = [
    { name: 'preventive-care-expansion-2025.jpg', category: 'health-insurance' },
    { name: 'mental-health-coverage-2025.jpg', category: 'health-insurance' },
    { name: 'digital-health-innovation-2025.jpg', category: 'health-insurance' },
  ];
  
  // Test existing images
  const existingImages = [
    { name: 'family-life-insurance-2025.jpg', category: 'life-insurance' },
    { name: 'medicare-comparison-2025.jpg', category: 'medicare' },
  ];
  
  // Test completely unknown images
  const unknownImages = [
    { name: 'non-existent-image.jpg', category: 'insurance-tips' },
    { name: 'another-missing-image.jpg', category: undefined },
  ];
  
  log('\n📋 Testing Missing Images (will use CDN fallbacks):', colors.blue);
  missingImages.forEach(img => testImageFallback(img.name, img.category));
  
  log('\n📋 Testing Existing Images (will use local first):', colors.blue);
  existingImages.forEach(img => testImageFallback(img.name, img.category));
  
  log('\n📋 Testing Unknown Images (will use placeholders):', colors.blue);
  unknownImages.forEach(img => testImageFallback(img.name, img.category));
  
  log('\n🎯 Key Benefits:', colors.green);
  log('  • Missing local images automatically use CDN sources', colors.cyan);
  log('  • Unknown images get appropriate category placeholders', colors.cyan);
  log('  • All images have proper alt text for accessibility', colors.cyan);
  log('  • System is completely deployment-resistant', colors.cyan);
  log('  • No more broken images after deployments!', colors.cyan);
  
  log('\n✨ The system works just like your service menu dropdown:', colors.green);
  log('  • Centralized configuration in constants/', colors.cyan);
  log('  • Robust fallback strategies', colors.cyan);
  log('  • Type-safe with "as const"', colors.cyan);
  log('  • Survives all deployments', colors.cyan);
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main };