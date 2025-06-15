const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '../public/icons');
const SOURCE_ICON = path.join(ICONS_DIR, 'base-icon.png');

// Ensure icons directory exists
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

// Define icon sizes needed for PWA
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Generate standard icons
async function generateStandardIcons() {
  console.log('Generating standard icons...');
  
  for (const size of sizes) {
    await sharp(SOURCE_ICON)
      .resize(size, size)
      .toFile(path.join(ICONS_DIR, `icon-${size}x${size}.png`));
    
    console.log(`Created icon-${size}x${size}.png`);
  }
}

// Generate Apple touch icon (180x180)
async function generateAppleTouchIcon() {
  console.log('Generating Apple touch icon...');
  
  await sharp(SOURCE_ICON)
    .resize(180, 180)
    .toFile(path.join(ICONS_DIR, 'apple-touch-icon.png'));
  
  console.log('Created apple-touch-icon.png');
}

// Generate maskable icon with padding
async function generateMaskableIcon() {
  console.log('Generating maskable icon...');
  
  // For maskable icon, we need to add padding (safe zone is 40% of the image)
  // We'll create a 512x512 icon with the logo centered and padding around it
  const size = 512;
  const padding = Math.floor(size * 0.1); // 10% padding on each side, ensure integer
  const logoSize = Math.floor(size - (padding * 2)); // Ensure integer
  
  await sharp(SOURCE_ICON)
    .resize(logoSize, logoSize)
    .extend({
      top: padding,
      bottom: padding,
      left: padding,
      right: padding,
      background: { r: 66, g: 97, b: 90, alpha: 1 } // #42615A (Deep Forest Green)
    })
    .toFile(path.join(ICONS_DIR, 'maskable-icon-512x512.png'));
  
  console.log('Created maskable-icon-512x512.png');
}

// Run all icon generation functions
async function generateAllIcons() {
  try {
    await generateStandardIcons();
    await generateAppleTouchIcon();
    await generateMaskableIcon();
    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateAllIcons();
