# Choice Insurance Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/2f5338f7-f76b-4c16-9878-81fe347d2049/deploy-status)](https://app.netlify.com/projects/choice22/deploys)

A modern, high-performance insurance website built with Next.js, TypeScript, and Tailwind CSS. Optimized for speed, accessibility, and SEO.

## 📋 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [📋 Available Scripts](#-available-scripts)
- [🏗️ Build & Deploy Process](#️-build--deploy-process)
- [🛠️ Tech Stack](#️-tech-stack)
- [🎯 Navigation Features](#-navigation-features)
  - [Dropdown Service Menu](#dropdown-service-menu)
- [📁 Project Structure](#-project-structure)
- [🚀 Performance Optimizations](#-performance-optimizations)
- [🔧 Development Workflow](#-development-workflow)
- [📝 Code Quality](#-code-quality)
- [🤝 Contributing](#-contributing)
- [📞 Support](#-support)

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or higher
- pnpm (recommended) or npm

### Setup

1. **Clone and setup the project:**

   ````bash
   git clone <repository-url>
   cd choice-insurance-website
   pnpm run setup
   ```bash

   ````

2. **Start development server:**

   ```bash
   pnpm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

### Development

- `pnpm run dev` - Start development server with Turbopack
- `pnpm run setup` - Initial project setup for new developers

### Building & Testing

- `pnpm run build` - Standard production build
- `pnpm run build:optimize` - Optimized build with pre/post checks
- `pnpm run test:build` - Clean build for testing
- `pnpm run start` - Start production server locally

### Code Quality

- `pnpm run lint` - Run ESLint
- `pnpm run lint:fix` - Fix ESLint issues automatically
- `pnpm run format` - Format code with Prettier
- `pnpm run format:check` - Check code formatting
- `pnpm run type-check` - TypeScript type checking

### Maintenance

- `pnpm run clean` - Remove build artifacts
- `pnpm run clean:all` - Remove build artifacts and node_modules
- `pnpm run analyze` - Analyze bundle size

## 🏗️ Build & Deploy Process

### Local Development Build

```bash
# Quick build
pnpm run build

# Optimized build with all checks
pnpm run build:optimize

# Test build (clean + build)
pnpm run test:build
```

### Prebuild Process

The project includes automated quality checks before each build:

```bash
# Prebuild script runs automatically before 'pnpm run build'
pnpm run prebuild  # Runs: lint + type-check + validate-pwa
```

**Prebuild Steps:**

1. **ESLint**: Code quality and style checking
2. **TypeScript**: Type checking for type safety
3. **PWA Validation**: Ensures Progressive Web App configuration is valid

This ensures that only high-quality, properly typed code gets deployed to production.

### Netlify Deployment

The project is configured for automatic deployment on Netlify:

1. **Automatic Deployment**: Push to `main` branch triggers production deployment
2. **Preview Deployments**: Pull requests create preview deployments
3. **Build Command**:

   ```bash
   pnpm install --frozen-lockfile && pnpm run print-versions && pnpm run build
   ```

4. **Publish Directory**: `.next`

#### Netlify Configuration (`netlify.toml`)

This project includes a `netlify.toml` file at the root to control build, environment, headers, plugins, and redirects. Key settings:

- **Node Version:** 20, **PNPM Version:** 10.12.1
- **Build Cache:** Enabled for Next.js (`NEXT_CACHE=true`)
- **Memory Optimization:** Node options set for increased memory
- **Asset Caching:** Long-term cache headers for static assets
- **Security:** Strict security headers set for all routes
- **Plugins:** Includes `@netlify/plugin-nextjs` and `netlify-plugin-bundle-env` for bundling environment variables into functions
- **SPA Redirect:** All routes fallback to `/index.html` for client-side routing

**Example snippet:**

```toml
[build]
base = "."
command = "pnpm install --frozen-lockfile && pnpm run print-versions && pnpm run build"
publish = ".next"

[build.environment]
NODE_VERSION = "20"
PNPM_VERSION = "10.12.1"
NEXT_CACHE = "true"
NODE_OPTIONS = "--max-old-space-size=4096"

[functions]
directory = "netlify/functions"

[[plugins]]
package = "@netlify/plugin-nextjs"

[[plugins]]
package = "netlify-plugin-bundle-env"
  [plugins.inputs]
  directories = ["netlify/functions"]
  include = [
    "NEXT_PUBLIC_API_URL",
    "NEXT_PUBLIC_FIREBASE_KEY",
    "NEXT_PUBLIC_SENTRY_DSN"
  ]
  mask = true

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Environment Variables

Create a `.env.local` file (use the template created by `pnpm run setup`):

```env
# Required
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_SITE_URL=your_site_url

# Optional
NEXT_PUBLIC_GA4_ID=your_google_analytics_4_id
NEXT_PUBLIC_GTM_ID=your_google_tag_manager_id
NEXT_PUBLIC_FIREBASE_KEY=your_firebase_key
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

**Note:** The `netlify-plugin-bundle-env` bundles certain environment variables for use in Netlify functions. Add any variables to both your `.env.local` and the `include` list in `netlify.toml` if they are needed in serverless functions.

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Package Manager**: pnpm
- **Deployment**: Netlify
- **CI/CD**: GitHub Actions (optional)

## 🎯 Navigation Features

### Recent UI Improvements & Fixes (December 2024)

#### **Navigation Menu Delay Fix**

- **Issue**: Navigation dropdown was closing too quickly when moving mouse between elements
- **Solution**: Increased `skipDelayDuration` from 300ms to 3000ms in `Header.tsx`
- **Location**: `src/components/layout/Header.tsx` line 42
- **Impact**: Improved user experience with more forgiving navigation timing

#### **Service Cards Uniform Sizing**

- **Issue**: Homepage service cards had inconsistent heights due to varying content lengths
- **Solution**: Applied flexbox layout with consistent height distribution
- **Changes Made**:
  - Added `flex h-full flex-col` to Card components
  - Added `flex flex-1 flex-col items-center justify-between` to CardContent
- **Location**: `src/app/page.tsx` lines 110-119
- **Result**: All service cards now have uniform height with buttons aligned at bottom

#### **Header Dropdown Menu Layout Reorganization**

- **Issue**: Unbalanced layout with first column having 2 services, second column having 6 services
- **Solution**: Redistributed services for better visual balance
- **Changes**:
  - **Before**: First column (All Services + 2 services), Second column (6 services)
  - **After**: First column (All Services + 3 services), Second column (5 services)
- **Implementation**: Modified `slice(0, 2)` to `slice(0, 3)` and `slice(2)` to `slice(3)`
- **Location**: `src/components/layout/Header.tsx` lines 111 and 130

#### **Service Button Uniform Sizing**

- **Issue**: Service buttons in dropdown had inconsistent heights
- **Solution**: Applied consistent minimum height and flexbox centering
- **Changes**: Added `min-h-[80px] flex flex-col justify-center` to all service buttons
- **CSS Conflict Fix**: Removed conflicting `block` class that was conflicting with `flex`
- **Location**: `src/components/layout/Header.tsx` lines 115 and 134

#### **Navigation Menu Background Fix**

- **Issue**: Navigation dropdown appeared to be floating without proper background
- **Solution**: Enhanced background styling for better visibility
- **Changes**:
  - Changed from `bg-brand-teal-blue` to `bg-white` for better contrast
  - Enhanced shadow from `shadow-lg` to `shadow-xl`
  - Updated text color to `text-brand-black` for readability
- **Location**: `src/components/layout/Header.tsx` line 91

#### **Meta Icons & PWA Configuration Enhancement**

- **Issue**: Inconsistent icon references and missing comprehensive favicon support
- **Solution**: Optimized meta icons configuration for better browser and PWA support
- **Changes Made**:
  - **Layout.tsx Icons**: Enhanced icon configuration with multiple formats
    - Added proper favicon.ico support with correct MIME type
    - Added SVG icon support for modern browsers
    - Included comprehensive PNG icon sizes (16x16, 32x32, 96x96, 144x144, 192x192, 512x512)
    - Added Safari mask-icon with brand color
    - Optimized Apple touch icon configuration
  - **Manifest.json**: Fixed PWA manifest with correct file paths
    - Updated icon references to use existing files in `/icons/` directory
    - Fixed shortcuts to use proper icon paths
    - Ensured maskable icons for better PWA experience
- **Locations**:
  - `src/app/layout.tsx` lines 45-87
  - `public/manifest.json` lines 15-55, 62-93
- **Benefits**:
  - Better favicon display across all browsers
  - Improved PWA installation experience
  - Consistent branding across all platforms
  - Enhanced SEO with proper meta icons

### Dropdown Service Menu

The website features a sophisticated dropdown navigation menu for the Services section with the following characteristics:

#### **Design & Branding**

- **Brand Colors**: Uses Choice Insurance brand colors consistently
  - **Primary**: Deep Forest Green (`#42615A`) for main elements
  - **Secondary**: Teal Blue (`#A7C9CA`) for hover states
  - **Accent**: Teal Blue Dark (`#8BB5B7`) for borders
- **Professional Styling**: Clean, modern design with subtle shadows and transitions

#### **Layout & Structure**

```text
[Services ▼]  ← Trigger button
┌─────────────────────────────────────────────────────────┐
│  [All Services - Large Button]    │  [Health Insurance] │
│                                   │  [Life Insurance]   │
│  [Medicare Advantage]             │  [Final Expense]    │
│  [Medicare Supplement]            │  [Cancer/Illness]   │
│                                   │  [Hospital Indem.]  │
│                                   │  [Annuities]        │
└─────────────────────────────────────────────────────────┘
```

#### **Technical Implementation**

- **Framework**: Built with Radix UI NavigationMenu for accessibility
- **Positioning**: Absolutely positioned dropdown anchored to trigger button
- **Dimensions**: Fixed 600px width with 2-column grid layout
- **Responsive**: Hidden on mobile/tablet (uses mobile menu instead)
- **Touch-Friendly**: Hover events disabled on touch devices

#### **User Experience Features**

- **Hover Activation**: Opens on mouse enter, closes on mouse leave
- **Keyboard Navigation**: Full keyboard accessibility support
- **Visual Feedback**: Smooth transitions and hover effects
- **Consistent Anchoring**: Dropdown always appears directly below trigger
- **No Layout Shifts**: Fixed positioning prevents content jumping

#### **Service Categories Included**

1. **All Services** (prominent main button)
2. **Health Insurance**
3. **Life Insurance**
4. **Medicare Advantage**
5. **Medicare Supplement**
6. **Final Expense**
7. **Cancer/Critical Illness**
8. **Hospital Indemnity**
9. **Annuities**

#### **Code Location**

- **Component**: `src/components/layout/Header.tsx`
- **Navigation Data**: `src/constants/navigation.ts`
- **Styling**: Tailwind CSS with brand color utilities

#### **Customization**

To modify the dropdown menu:

1. **Add/Remove Services**: Edit `FOOTER_LINKS.services` in `src/constants/navigation.ts`
2. **Change Colors**: Update brand colors in `tailwind.config.js`
3. **Adjust Layout**: Modify grid structure in `Header.tsx`
4. **Update Dimensions**: Change `w-[600px]` class for different width

#### **Browser Support**

- **Modern Browsers**: Full support with all features
- **Legacy Browsers**: Graceful degradation with basic functionality
- **Mobile Devices**: Replaced with mobile-optimized menu

## 📁 Project Structure

```text
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # Reusable components
│   ├── lib/                 # Utility functions
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript type definitions
│   └── constants/           # App constants
├── public/                  # Static assets
├── content/                 # Content files (blog, etc.)
├── scripts/                 # Build and utility scripts
├── netlify/                 # Netlify functions
└── .github/                 # GitHub Actions workflows
```

## 🚀 Performance Optimizations

- **Script Optimization**: Intelligent script loading strategies
- **Critical CSS**: Automated critical CSS generation
- **Image Optimization**: Next.js Image component with Sharp
- **Bundle Analysis**: Built-in bundle size analysis
- **Caching**: Optimized caching headers for static assets

## 🔧 Development Workflow

1. **Start Development**: `pnpm run dev`
2. **Make Changes**: Edit files with hot reload
3. **Check Code Quality**: `pnpm run lint && pnpm run type-check`
4. **Format Code**: `pnpm run format`
5. **Test Build**: `pnpm run test:build`
6. **Deploy**: Push to repository (auto-deploys via Netlify)

## 📝 Code Quality

- **ESLint**: Configured with Next.js and TypeScript rules
- **Prettier**: Code formatting with Tailwind CSS plugin
- **TypeScript**: Strict type checking
- **Pre-build Checks**: Automated linting and type checking before builds

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run quality checks: `pnpm run lint && pnpm run type-check`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 🔧 Troubleshooting

### Common Issues & Solutions

#### **Navigation Menu Issues**

**Problem**: Navigation dropdown closes too quickly

- **Solution**: Check `skipDelayDuration` in `Header.tsx` (should be 3000ms)
- **Location**: `src/components/layout/Header.tsx` line 42

**Problem**: Navigation menu appears floating without background

- **Solution**: Ensure proper background classes are applied
- **Check**: `bg-white text-brand-black shadow-xl` on dropdown container
- **Location**: `src/components/layout/Header.tsx` line 91

**Problem**: CSS conflicts in Tailwind classes

- **Solution**: Remove conflicting classes (e.g., `block` + `flex`)
- **Check**: Service button classes should use `flex` without `block`
- **Location**: `src/components/layout/Header.tsx` lines 115, 134

#### **Layout Issues**

**Problem**: Service cards have inconsistent heights

- **Solution**: Apply flexbox layout with height distribution
- **Required Classes**:
  - Card: `flex h-full flex-col`
  - CardContent: `flex flex-1 flex-col items-center justify-between`
- **Location**: `src/app/page.tsx`

**Problem**: Unbalanced dropdown menu layout

- **Solution**: Redistribute services between columns
- **Current Setup**: First column (3 services), Second column (5 services)
- **Modify**: `slice(0, 3)` and `slice(3)` in service mapping
- **Location**: `src/components/layout/Header.tsx`

#### **Development Issues**

**Problem**: Build fails with TypeScript errors

- **Solution**: Run `pnpm run type-check` to identify issues
- **Fix**: Address type errors before building

**Problem**: Linting errors prevent build

- **Solution**: Run `pnpm run lint:fix` to auto-fix issues
- **Manual**: Check ESLint output for remaining issues

**Problem**: Styling not applying correctly

- **Solution**: Check Tailwind class conflicts
- **Tool**: Use browser dev tools to inspect computed styles
- **Verify**: Ensure classes are not being overridden

#### **Meta Icons & PWA Issues**

**Problem**: Favicon not displaying correctly in browsers

- **Solution**: Check icon file paths and formats
- **Verify**: Ensure favicon.ico, favicon.png, and icon.svg exist in `/public/`
- **Check**: Browser cache - clear cache and hard refresh
- **Location**: `src/app/layout.tsx` icons configuration

**Problem**: PWA installation not working properly

- **Solution**: Validate manifest.json configuration
- **Check**: All icon paths in manifest.json point to existing files
- **Verify**: Icon sizes match actual file dimensions
- **Tool**: Use browser dev tools > Application > Manifest to debug
- **Location**: `public/manifest.json`

**Problem**: Icons not showing on mobile devices

- **Solution**: Ensure apple-touch-icon.png exists and is properly configured
- **Check**: Apple touch icon should be 180x180 pixels
- **Verify**: Meta tags in layout.tsx include apple-mobile-web-app settings
- **Location**: `public/apple-touch-icon.png`

### Quick Fixes Reference

```bash
# Fix navigation delay
# In Header.tsx line 42: skipDelayDuration={3000}

# Fix service card heights
# In page.tsx: className="flex h-full flex-col"
# In CardContent: className="flex flex-1 flex-col items-center justify-between"

# Fix dropdown background
# In Header.tsx line 91: className="...bg-white text-brand-black shadow-xl"

# Fix CSS conflicts
# Remove 'block' class when using 'flex'
# Use: className="flex min-h-[80px] select-none flex-col justify-center..."

# Fix meta icons configuration
# In layout.tsx: Ensure comprehensive icon configuration with multiple formats
# In manifest.json: Update icon paths to match existing files in /icons/ directory
# Check: favicon.ico, favicon.png, icon.svg, apple-touch-icon.png exist in /public/
```

## 📞 Support

For questions or issues, please:

1. Check the existing issues
2. Create a new issue with detailed information
3. Contact the development team

---

## Happy coding! 🚀
