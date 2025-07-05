#!/bin/bash

# Production build script for Choice Insurance Website

set -e  # Exit on any error

echo "🚀 Starting production build process..."

# Step 1: Install dependencies
echo "📦 Installing dependencies..."
pnpm install --frozen-lockfile

# Step 2: Build the application
echo "🔨 Building Next.js application..."
pnpm run build

# Step 3: Prepare output directory
echo "📁 Preparing output directory..."
rm -rf output
mkdir -p output

# Step 4: Copy build files
echo "📋 Copying build files to output/..."
if [ -d "out" ]; then
    cp -r out/* output/
    echo "✅ Production build ready in output/ directory"
else
    echo "❌ out/ directory not found"
    exit 1
fi

echo "🎉 Production build completed successfully!"