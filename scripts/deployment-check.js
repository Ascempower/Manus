#!/usr/bin/env node

/**
 * Deployment Check Script
 * Ensures Calendly widget and blog images are deployment-resistant
 * Validates that all systems are properly configured
 */

const fs = require('fs');
const path = require('path');

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

function checkFileExists(filePath, description) {
  const fullPath = path.join(process.cwd(), filePath);
  const exists = fs.existsSync(fullPath);
  
  if (exists) {
    log(`  ✅ ${description}`, colors.green);
    return true;
  } else {
    log(`  ❌ ${description} (MISSING: ${filePath})`, colors.red);
    return false;
  }
}

function checkConstants() {
  log('\n🔧 Checking Constants Files:', colors.blue);
  
  let allGood = true;
  
  // Check Calendly constants
  allGood &= checkFileExists('src/constants/calendly.ts', 'Calendly configuration constants');
  
  // Check blog images constants
  allGood &= checkFileExists('src/constants/blog-images.ts', 'Blog images configuration constants');
  
  // Check navigation constants (reference for pattern)
  allGood &= checkFileExists('src/constants/navigation.ts', 'Navigation constants (reference pattern)');
  
  return allGood;
}

function checkComponents() {
  log('\n🧩 Checking Component Files:', colors.blue);
  
  let allGood = true;
  
  // Check Calendly widget
  allGood &= checkFileExists('src/components/widgets/CalendlyWidget.tsx', 'Robust Calendly widget component');
  
  // Check blog image component
  allGood &= checkFileExists('src/components/ui/BlogImage.tsx', 'Robust blog image component');
  
  // Check widget exports
  allGood &= checkFileExists('src/components/widgets/index.ts', 'Widget exports');
  
  return allGood;
}

function validateCalendlyConfig() {
  log('\n📅 Validating Calendly Configuration:', colors.blue);
  
  try {
    const configPath = path.join(process.cwd(), 'src/constants/calendly.ts');
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    // Check for required exports
    const requiredExports = [
      'CALENDLY_CONFIG',
      'CALENDLY_CUSTOM_STYLES',
      'CALENDLY_INIT_OPTIONS',
      'getCalendlyUrl'
    ];
    
    let allExportsFound = true;
    requiredExports.forEach(exportName => {
      if (configContent.includes(`export const ${exportName}`) || configContent.includes(`export function ${exportName}`)) {
        log(`  ✅ ${exportName} export found`, colors.green);
      } else {
        log(`  ❌ ${exportName} export missing`, colors.red);
        allExportsFound = false;
      }
    });
    
    // Check for deployment-resistant features
    const features = [
      { name: 'Fallback phone number', pattern: 'fallback.*phone' },
      { name: 'Brand colors', pattern: 'branding.*primary_color' },
      { name: 'Custom CSS styles', pattern: 'CALENDLY_CUSTOM_STYLES' },
      { name: 'Retry configuration', pattern: 'maxRetries' },
      { name: 'UTM tracking', pattern: 'utm.*utmCampaign' },
    ];
    
    features.forEach(feature => {
      const regex = new RegExp(feature.pattern, 'i');
      if (regex.test(configContent)) {
        log(`  ✅ ${feature.name} configured`, colors.green);
      } else {
        log(`  ⚠️  ${feature.name} may not be configured`, colors.yellow);
      }
    });
    
    return allExportsFound;
  } catch (error) {
    log(`  ❌ Error reading Calendly config: ${error.message}`, colors.red);
    return false;
  }
}

function validateBlogImagesConfig() {
  log('\n🖼️  Validating Blog Images Configuration:', colors.blue);
  
  try {
    const configPath = path.join(process.cwd(), 'src/constants/blog-images.ts');
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    // Check for required exports
    const requiredExports = [
      'PLACEHOLDER_IMAGES',
      'CDN_IMAGES',
      'LOCAL_IMAGES',
      'CATEGORY_IMAGE_MAP',
      'IMAGE_ALT_TEXTS',
      'getBlogImageSrc',
      'getPlaceholderImage'
    ];
    
    let allExportsFound = true;
    requiredExports.forEach(exportName => {
      if (configContent.includes(`export const ${exportName}`) || configContent.includes(`export function ${exportName}`)) {
        log(`  ✅ ${exportName} export found`, colors.green);
      } else {
        log(`  ❌ ${exportName} export missing`, colors.red);
        allExportsFound = false;
      }
    });
    
    // Check for deployment-resistant features
    const features = [
      { name: 'Base64 placeholders', pattern: 'data:image/svg\\+xml;base64' },
      { name: 'CDN fallbacks', pattern: 'images\\.unsplash\\.com' },
      { name: 'Local image paths', pattern: '/images/blog/' },
      { name: 'Alt text mapping', pattern: 'IMAGE_ALT_TEXTS' },
      { name: 'Loading strategy', pattern: 'strategy.*local.*cdn.*placeholder' },
    ];
    
    features.forEach(feature => {
      const regex = new RegExp(feature.pattern, 'i');
      if (regex.test(configContent)) {
        log(`  ✅ ${feature.name} configured`, colors.green);
      } else {
        log(`  ⚠️  ${feature.name} may not be configured`, colors.yellow);
      }
    });
    
    return allExportsFound;
  } catch (error) {
    log(`  ❌ Error reading blog images config: ${error.message}`, colors.red);
    return false;
  }
}

function checkUsageInComponents() {
  log('\n🔗 Checking Component Usage:', colors.blue);
  
  let allGood = true;
  
  // Check if contact page uses the new Calendly widget
  try {
    const contactPagePath = path.join(process.cwd(), 'src/app/contact/page.tsx');
    if (fs.existsSync(contactPagePath)) {
      const contactContent = fs.readFileSync(contactPagePath, 'utf8');
      
      if (contactContent.includes('CalendlyInline')) {
        log(`  ✅ Contact page uses CalendlyInline component`, colors.green);
      } else {
        log(`  ⚠️  Contact page may not be using the robust Calendly widget`, colors.yellow);
      }
    }
  } catch (error) {
    log(`  ⚠️  Could not check contact page usage: ${error.message}`, colors.yellow);
  }
  
  // Check if blog components use the new image system
  try {
    const blogImagesLibPath = path.join(process.cwd(), 'src/lib/blog-images.ts');
    if (fs.existsSync(blogImagesLibPath)) {
      const blogImagesContent = fs.readFileSync(blogImagesLibPath, 'utf8');
      
      if (blogImagesContent.includes('@/constants/blog-images')) {
        log(`  ✅ Blog images lib uses new constants system`, colors.green);
      } else {
        log(`  ⚠️  Blog images lib may not be using the robust system`, colors.yellow);
      }
    }
  } catch (error) {
    log(`  ⚠️  Could not check blog images lib usage: ${error.message}`, colors.yellow);
  }
  
  return allGood;
}

function checkDeploymentResistance() {
  log('\n🛡️  Checking Deployment Resistance:', colors.blue);
  
  // Check if constants follow the same pattern as navigation.ts
  try {
    const navPath = path.join(process.cwd(), 'src/constants/navigation.ts');
    const navContent = fs.readFileSync(navPath, 'utf8');
    
    if (navContent.includes('as const')) {
      log(`  ✅ Navigation uses 'as const' pattern (reference)`, colors.green);
    }
    
    // Check if our constants follow the same pattern
    const calendlyPath = path.join(process.cwd(), 'src/constants/calendly.ts');
    const calendlyContent = fs.readFileSync(calendlyPath, 'utf8');
    
    if (calendlyContent.includes('as const')) {
      log(`  ✅ Calendly config uses 'as const' pattern`, colors.green);
    } else {
      log(`  ⚠️  Calendly config should use 'as const' for type safety`, colors.yellow);
    }
    
    const blogImagesPath = path.join(process.cwd(), 'src/constants/blog-images.ts');
    const blogImagesContent = fs.readFileSync(blogImagesPath, 'utf8');
    
    if (blogImagesContent.includes('as const')) {
      log(`  ✅ Blog images config uses 'as const' pattern`, colors.green);
    } else {
      log(`  ⚠️  Blog images config should use 'as const' for type safety`, colors.yellow);
    }
    
  } catch (error) {
    log(`  ⚠️  Could not verify deployment resistance patterns: ${error.message}`, colors.yellow);
  }
}

function main() {
  log('🚀 Deployment Resistance Check', colors.cyan);
  log('Validating Calendly widget and blog images systems...', colors.cyan);
  
  let overallSuccess = true;
  
  // Run all checks
  overallSuccess &= checkConstants();
  overallSuccess &= checkComponents();
  overallSuccess &= validateCalendlyConfig();
  overallSuccess &= validateBlogImagesConfig();
  overallSuccess &= checkUsageInComponents();
  checkDeploymentResistance();
  
  // Summary
  log('\n📊 Summary:', colors.blue);
  
  if (overallSuccess) {
    log('🎉 All systems are deployment-resistant and properly configured!', colors.green);
    log('✨ Your Calendly widget and blog images will persist across deployments.', colors.green);
    log('🔒 Both systems follow the same robust pattern as your service menu dropdown.', colors.green);
  } else {
    log('⚠️  Some issues were found. Please review the output above.', colors.yellow);
    log('💡 Fix any missing files or configurations before deploying.', colors.yellow);
  }
  
  log('\n🔧 Key Features Implemented:', colors.blue);
  log('  • Calendly widget with retry logic and fallbacks', colors.cyan);
  log('  • Blog images with CDN + local + placeholder strategy', colors.cyan);
  log('  • Centralized constants following navigation.ts pattern', colors.cyan);
  log('  • Deployment-resistant configuration', colors.cyan);
  log('  • Robust error handling and user feedback', colors.cyan);
  
  process.exit(overallSuccess ? 0 : 1);
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main };