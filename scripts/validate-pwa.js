#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating PWA configuration...');

// Check manifest.json
const manifestPath = path.join(process.cwd(), 'public', 'manifest.json');
if (!fs.existsSync(manifestPath)) {
  console.error('❌ manifest.json not found');
  process.exit(1);
}

try {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  // Validate required fields
  const requiredFields = ['name', 'short_name', 'start_url', 'display', 'icons'];
  const missingFields = requiredFields.filter(field => !manifest[field]);

  if (missingFields.length > 0) {
    console.error(`❌ Missing required manifest fields: ${missingFields.join(', ')}`);
    process.exit(1);
  }

  // Validate icons
  if (!Array.isArray(manifest.icons) || manifest.icons.length === 0) {
    console.error('❌ Manifest must have at least one icon');
    process.exit(1);
  }

  // Check for required icon sizes
  const iconSizes = manifest.icons.map(icon => icon.sizes).join(',');
  const hasLargeIcon = manifest.icons.some(
    icon => icon.sizes && (icon.sizes.includes('512x512') || icon.sizes.includes('any'))
  );

  if (!hasLargeIcon) {
    console.warn('⚠️  Consider adding a 512x512 icon for better PWA support');
  }

  // Check for maskable icons
  const hasMaskableIcon = manifest.icons.some(
    icon => icon.purpose && icon.purpose.includes('maskable')
  );

  if (!hasMaskableIcon) {
    console.warn('⚠️  Consider adding a maskable icon for better app installation experience');
  } else {
    console.log('✅ Maskable icon found - app will fill device shapes properly');
  }

  console.log('✅ manifest.json is valid');
} catch (error) {
  console.error('❌ Invalid manifest.json:', error.message);
  process.exit(1);
}

// Check service worker
const swPath = path.join(process.cwd(), 'public', 'sw.js');
if (!fs.existsSync(swPath)) {
  console.error('❌ sw.js not found');
  process.exit(1);
}

try {
  const swContent = fs.readFileSync(swPath, 'utf8');

  // Check for essential service worker features
  const requiredFeatures = ['addEventListener', 'install', 'activate', 'fetch', 'caches'];

  const missingFeatures = requiredFeatures.filter(feature => !swContent.includes(feature));

  if (missingFeatures.length > 0) {
    console.error(`❌ Service worker missing features: ${missingFeatures.join(', ')}`);
    process.exit(1);
  }

  console.log('✅ sw.js is valid');
} catch (error) {
  console.error('❌ Error reading sw.js:', error.message);
  process.exit(1);
}

// Check for HTTPS requirement (in production)
if (process.env.NODE_ENV === 'production') {
  console.log('ℹ️  Remember: PWAs require HTTPS in production');
}

// Check for favicon and apple-touch-icon
const faviconPath = path.join(process.cwd(), 'public', 'favicon.ico');
const appleTouchIconPath = path.join(process.cwd(), 'public', 'apple-touch-icon.png');

if (!fs.existsSync(faviconPath)) {
  console.warn('⚠️  favicon.ico not found');
}

if (!fs.existsSync(appleTouchIconPath)) {
  console.warn('⚠️  apple-touch-icon.png not found');
}

console.log('🎉 PWA validation completed successfully!');
console.log('');
console.log('📱 Your app should now be installable on supported devices');
console.log('🔄 Service worker will cache resources for offline use');
console.log('🚀 Deploy to HTTPS to enable full PWA features');
