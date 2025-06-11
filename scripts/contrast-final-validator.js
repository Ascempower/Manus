// Contrast Checker Script - Final Validation
// This script calculates the contrast ratio between updated color combinations
// and checks if they meet WCAG 2.1 AA standards (4.5:1 for normal text, 3:1 for large text)

// Function to convert hex to RGB
function hexToRgb(hex) {
  // Remove # if present
  hex = hex.replace(/^#/, '');
  
  // Parse hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return { r, g, b };
}

// Function to calculate relative luminance
function calculateLuminance(rgb) {
  // Convert RGB to sRGB
  let r = rgb.r / 255;
  let g = rgb.g / 255;
  let b = rgb.b / 255;
  
  // Apply the formula for each channel
  r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
  
  // Calculate luminance
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Function to calculate contrast ratio
function calculateContrastRatio(color1, color2) {
  const lum1 = calculateLuminance(hexToRgb(color1));
  const lum2 = calculateLuminance(hexToRgb(color2));
  
  // Determine lighter and darker luminance
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  
  // Calculate contrast ratio
  return (lighter + 0.05) / (darker + 0.05);
}

// Function to check if contrast meets WCAG AA standards
function meetsWCAGAA(ratio, isLargeText = false) {
  return isLargeText ? ratio >= 3 : ratio >= 4.5;
}

// Define the updated brand colors with even darker variants
const brandColors = {
  'White': '#FFFFFF',
  'Teal Blue': '#A7C9CA',
  'Teal Blue Dark': '#6A9B9D',
  'Teal Blue Darker': '#3A6B6D', // New even darker version
  'Deep Forest Green': '#42615A',
  'Warm Beige/Coral': '#DD8B66',
  'Warm Beige/Coral Dark': '#C06B46',
  'Warm Beige/Coral Darker': '#A04B26', // New even darker version
  'Black': '#000000'
};

// Check all color combinations
console.log('FINAL VALIDATION: Color Contrast Analysis for Choice Insurance Website');
console.log('==============================================================');
console.log('WCAG AA Requirements:');
console.log('- Normal text: 4.5:1 minimum contrast ratio');
console.log('- Large text (18pt+): 3:1 minimum contrast ratio');
console.log('==============================================================\n');

const results = [];

// Test all combinations
for (const [bgName, bgColor] of Object.entries(brandColors)) {
  for (const [fgName, fgColor] of Object.entries(brandColors)) {
    if (bgColor !== fgColor) {
      const ratio = calculateContrastRatio(bgColor, fgColor);
      const passesNormalText = meetsWCAGAA(ratio, false);
      const passesLargeText = meetsWCAGAA(ratio, true);
      
      results.push({
        background: bgName,
        foreground: fgName,
        bgColor,
        fgColor,
        ratio: ratio.toFixed(2),
        passesNormalText,
        passesLargeText
      });
    }
  }
}

// Sort results by contrast ratio (ascending)
results.sort((a, b) => parseFloat(a.ratio) - parseFloat(b.ratio));

// Display results
for (const result of results) {
  const status = result.passesNormalText ? 'PASS' : (result.passesLargeText ? 'PASS (large text only)' : 'FAIL');
  console.log(`Background: ${result.background} (${result.bgColor})`);
  console.log(`Foreground: ${result.foreground} (${result.fgColor})`);
  console.log(`Contrast Ratio: ${result.ratio}:1`);
  console.log(`Status: ${status}`);
  console.log('----------------------------------------------------');
}

// Summarize failures
const failures = results.filter(r => !r.passesNormalText);
console.log('\nSummary of Problematic Combinations:');
console.log('==============================================================');

if (failures.length === 0) {
  console.log('All color combinations pass WCAG AA standards for normal text.');
} else {
  console.log(`${failures.length} color combinations fail WCAG AA standards for normal text:`);
  for (const failure of failures) {
    console.log(`- ${failure.background} background with ${failure.foreground} text (${failure.ratio}:1)`);
  }
}

// Validate specific combinations used in the design
console.log('\nValidation of Key Combinations Used in Design:');
console.log('==============================================================');

// Check Teal Blue Darker with white text
const tealBlueDarkerWithWhite = results.find(r => 
  r.background === 'Teal Blue Darker' && r.foreground === 'White'
);
console.log(`Teal Blue Darker background with White text: ${tealBlueDarkerWithWhite.ratio}:1 - ${tealBlueDarkerWithWhite.passesNormalText ? 'PASS' : 'FAIL'}`);

// Check Warm Beige/Coral Darker with white text
const coralDarkerWithWhite = results.find(r => 
  r.background === 'Warm Beige/Coral Darker' && r.foreground === 'White'
);
console.log(`Warm Beige/Coral Darker background with White text: ${coralDarkerWithWhite.ratio}:1 - ${coralDarkerWithWhite.passesNormalText ? 'PASS' : 'FAIL'}`);

// Check Deep Forest Green with white text
const forestGreenWithWhite = results.find(r => 
  r.background === 'Deep Forest Green' && r.foreground === 'White'
);
console.log(`Deep Forest Green background with White text: ${forestGreenWithWhite.ratio}:1 - ${forestGreenWithWhite.passesNormalText ? 'PASS' : 'FAIL'}`);

// Check Teal Blue Darker with Deep Forest Green text
const tealBlueDarkerWithForestGreen = results.find(r => 
  r.background === 'Teal Blue Darker' && r.foreground === 'Deep Forest Green'
);
console.log(`Teal Blue Darker background with Deep Forest Green text: ${tealBlueDarkerWithForestGreen ? tealBlueDarkerWithForestGreen.ratio + ':1 - ' + (tealBlueDarkerWithForestGreen.passesNormalText ? 'PASS' : 'FAIL') : 'Not found'}`);

// Check Warm Beige/Coral with Black text
const coralWithBlack = results.find(r => 
  r.background === 'Warm Beige/Coral' && r.foreground === 'Black'
);
console.log(`Warm Beige/Coral background with Black text: ${coralWithBlack.ratio}:1 - ${coralWithBlack.passesNormalText ? 'PASS' : 'FAIL'}`);

// Check Teal Blue with Black text
const tealBlueWithBlack = results.find(r => 
  r.background === 'Teal Blue' && r.foreground === 'Black'
);
console.log(`Teal Blue background with Black text: ${tealBlueWithBlack.ratio}:1 - ${tealBlueWithBlack.passesNormalText ? 'PASS' : 'FAIL'}`);
