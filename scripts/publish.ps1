# PowerShell script for production publishing
param(
    [switch]$Help
)

if ($Help) {
    Write-Host "Choice Insurance Website - Production Publisher"
    Write-Host "Usage: .\scripts\publish.ps1"
    Write-Host ""
    Write-Host "This script will:"
    Write-Host "  1. Install dependencies with pnpm"
    Write-Host "  2. Build the Next.js application"
    Write-Host "  3. Copy build files to output/ directory"
    exit 0
}

Write-Host "🚀 Starting production build process..." -ForegroundColor Green

# Step 1: Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
pnpm install --frozen-lockfile
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

# Step 2: Build the application
Write-Host "🔨 Building Next.js application..." -ForegroundColor Yellow
pnpm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}

# Step 3: Prepare output directory
Write-Host "📁 Preparing output directory..." -ForegroundColor Yellow
if (Test-Path "output") {
    Remove-Item -Recurse -Force "output"
}
New-Item -ItemType Directory -Path "output" -Force | Out-Null

# Step 4: Copy build files
Write-Host "📋 Copying build files to output/..." -ForegroundColor Yellow
if (Test-Path "out") {
    Copy-Item -Recurse -Force "out\*" "output\"
    Write-Host "✅ Production build ready in output/ directory" -ForegroundColor Green
} else {
    Write-Host "❌ out/ directory not found" -ForegroundColor Red
    exit 1
}

Write-Host "🎉 Production build completed successfully!" -ForegroundColor Green