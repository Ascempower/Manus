#!/usr/bin/env node

/**
 * Development Environment Setup Script
 * Helps new developers get started quickly
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function runCommand(command, description, optional = false) {
  log(`\n${colors.blue}🔄 ${description}...${colors.reset}`);
  try {
    execSync(command, { stdio: 'inherit' });
    log(`${colors.green}✅ ${description} completed${colors.reset}`);
    return true;
  } catch (error) {
    if (optional) {
      log(`${colors.yellow}⚠️  ${description} failed (optional)${colors.reset}`);
      return false;
    } else {
      log(`${colors.red}❌ ${description} failed${colors.reset}`);
      throw error;
    }
  }
}

function checkPrerequisites() {
  log(`${colors.cyan}🔍 Checking prerequisites...${colors.reset}`);

  // Check Node.js version
  const nodeVersion = process.version;
  const requiredNodeVersion = '20';
  const currentMajor = parseInt(nodeVersion.slice(1).split('.')[0]);

  if (currentMajor < parseInt(requiredNodeVersion)) {
    log(
      `${colors.red}❌ Node.js ${requiredNodeVersion}+ required, found ${nodeVersion}${colors.reset}`
    );
    log(`${colors.yellow}Please install Node.js ${requiredNodeVersion} or higher${colors.reset}`);
    return false;
  }

  log(`${colors.green}✅ Node.js ${nodeVersion}${colors.reset}`);

  // Check for pnpm
  try {
    const pnpmVersion = execSync('pnpm --version', { encoding: 'utf8' }).trim();
    log(`${colors.green}✅ pnpm ${pnpmVersion}${colors.reset}`);
  } catch (error) {
    log(`${colors.red}❌ pnpm not found${colors.reset}`);
    log(`${colors.yellow}Install pnpm: npm install -g pnpm${colors.reset}`);
    return false;
  }

  return true;
}

function setupEnvironment() {
  log(`${colors.cyan}🔧 Setting up environment...${colors.reset}`);

  // Check if .env.local exists
  if (!fs.existsSync('.env.local')) {
    log(`${colors.yellow}⚠️  .env.local not found${colors.reset}`);
    log(`${colors.blue}Creating .env.local template...${colors.reset}`);

    const envTemplate = `# Local Environment Variables
# Copy this file to .env.local and fill in your values

# Next.js
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Analytics (optional)
# NEXT_PUBLIC_GA_ID=
# NEXT_PUBLIC_GTM_ID=

# Database (if applicable)
# DATABASE_URL=

# Authentication (if applicable)
# NEXTAUTH_SECRET=
# NEXTAUTH_URL=http://localhost:3000

# Third-party services
# NEXT_PUBLIC_FIREBASE_KEY=
# NEXT_PUBLIC_SENTRY_DSN=
`;

    fs.writeFileSync('.env.local', envTemplate);
    log(`${colors.green}✅ Created .env.local template${colors.reset}`);
    log(`${colors.yellow}Please edit .env.local with your actual values${colors.reset}`);
  } else {
    log(`${colors.green}✅ .env.local exists${colors.reset}`);
  }
}

function installDependencies() {
  log(`${colors.cyan}📦 Installing dependencies...${colors.reset}`);

  // Install dependencies
  runCommand('pnpm install', 'Installing packages');

  // Run initial setup tasks
  runCommand('pnpm run lint:fix', 'Running initial lint fix', true);
  runCommand('pnpm run format', 'Formatting code', true);
}

function runInitialChecks() {
  log(`${colors.cyan}🧪 Running initial checks...${colors.reset}`);

  // Type check
  runCommand('pnpm run type-check', 'Type checking', true);

  // Test build
  runCommand('pnpm run build', 'Testing build process');
}

function showNextSteps() {
  log(`\n${colors.bright}🎉 Setup completed successfully!${colors.reset}`);
  log(`\n${colors.cyan}Next steps:${colors.reset}`);
  log(`1. Edit .env.local with your environment variables`);
  log(`2. Start development server: ${colors.green}pnpm run dev${colors.reset}`);
  log(`3. Open http://localhost:3000 in your browser`);
  log(`\n${colors.cyan}Available commands:${colors.reset}`);
  log(`• ${colors.green}pnpm run dev${colors.reset}          - Start development server`);
  log(`• ${colors.green}pnpm run build${colors.reset}        - Build for production`);
  log(`• ${colors.green}pnpm run build:optimize${colors.reset} - Optimized build with checks`);
  log(`• ${colors.green}pnpm run lint${colors.reset}         - Run ESLint`);
  log(`• ${colors.green}pnpm run format${colors.reset}       - Format code with Prettier`);
  log(`• ${colors.green}pnpm run clean${colors.reset}        - Clean build artifacts`);
  log(`\n${colors.yellow}Happy coding! 🚀${colors.reset}`);
}

async function main() {
  log(`${colors.bright}🚀 Setting up development environment${colors.reset}`);

  try {
    // Check prerequisites
    if (!checkPrerequisites()) {
      process.exit(1);
    }

    // Setup environment
    setupEnvironment();

    // Install dependencies
    installDependencies();

    // Run initial checks
    runInitialChecks();

    // Show next steps
    showNextSteps();
  } catch (error) {
    log(`${colors.red}Setup failed: ${error.message}${colors.reset}`);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { main, checkPrerequisites, setupEnvironment };
