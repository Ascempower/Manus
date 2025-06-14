#!/usr/bin/env node

/**
 * Script to generate critical CSS for above-the-fold content
 * Run this script after making changes to critical styles
 */

const fs = require('fs');
const path = require('path');

const criticalCSS = `
/* Critical CSS for above-the-fold content - Auto-generated */
/* This CSS is inlined in layout.tsx to prevent render blocking */

/* Font face declarations with font-display: swap */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJfecg.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* CSS Variables */
:root {
  --color-brand-white: #FFFFFF;
  --color-brand-teal-blue: #A7C9CA;
  --color-brand-teal-blue-dark: #8BB5B7;
  --color-brand-deep-forest-green: #42615A;
  --color-brand-warm-beige-coral: #DD8B66;
  --color-brand-warm-beige-coral-dark: #C77A52;
  --color-brand-black: #000000;
}

/* Critical base styles */
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Critical layout styles */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.min-h-screen { min-block-size: 100vh; }
.flex-grow { flex-grow: 1; }

/* Critical header styles */
header {
  position: sticky;
  inset-block-start: 0;
  z-index: 50;
  inline-size: 100%;
  border-block-end: 1px solid rgba(66, 97, 90, 0.4);
  background-color: var(--color-brand-deep-forest-green);
  color: var(--color-brand-white);
}

/* Critical hero section styles */
.hero-section {
  padding: 5rem 0 8rem;
  background-color: var(--color-brand-teal-blue);
  color: var(--color-brand-deep-forest-green);
  text-align: center;
}

.hero-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-block-end: 1.5rem;
  font-family: 'Poppins', sans-serif;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.125rem;
  margin-block-end: 2.5rem;
  max-inline-size: 48rem;
  margin-inline: auto;
  color: rgba(66, 97, 90, 0.9);
}

/* Critical button styles */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 0.375rem;
  background-color: var(--color-brand-warm-beige-coral);
  color: var(--color-brand-black);
  transition: background-color 0.2s ease-in-out;
}

.btn-primary:hover {
  background-color: var(--color-brand-warm-beige-coral-dark);
}

/* Container styles */
.container {
  inline-size: 100%;
  margin-inline-start: auto;
  margin-inline-end: auto;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
}

/* Responsive styles */
@media (min-width: 768px) {
  .hero-title {
    font-size: 3.75rem;
  }
  
  .hero-description {
    font-size: 1.25rem;
  }
  
  .hero-section {
    padding: 8rem 0;
  }
}

/* Prevent layout shift */
.loading-placeholder {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
`.trim();

// Write the critical CSS to file
const outputPath = path.join(__dirname, '..', 'src', 'app', 'critical.css');
fs.writeFileSync(outputPath, criticalCSS, 'utf8');

console.log('✅ Critical CSS generated successfully at:', outputPath);
console.log('📝 Remember to update the inlined CSS in layout.tsx if needed');