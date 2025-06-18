[![Netlify Status](https://api.netlify.com/api/v1/badges/2f5338f7-f76b-4c16-9878-81fe347d2049/deploy-status)](https://app.netlify.com/projects/choice22/deploys)

# Choice Insurance Website

A modern, high-performance insurance website built with Next.js, TypeScript, and Tailwind CSS. Optimized for speed, accessibility, and SEO.

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or higher
- pnpm (recommended) or npm

### Setup

1. **Clone and setup the project:**

   ```bash
   git clone <repository-url>
   cd choice-insurance-website
   pnpm run setup
   ```

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

### Netlify Deployment

The project is configured for automatic deployment on Netlify:

1. **Automatic Deployment**: Push to `main` branch triggers production deployment
2. **Preview Deployments**: Pull requests create preview deployments
3. **Build Command**:  
   ```
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
NEXT_PUBLIC_GA_ID=your_google_analytics_id
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

## 📁 Project Structure

```
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

## 📞 Support

For questions or issues, please:

1. Check the existing issues
2. Create a new issue with detailed information
3. Contact the development team

---

**Happy coding! 🚀**
