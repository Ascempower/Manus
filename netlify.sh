#!/bin/bash

# Install dependencies without frozen lockfile
echo "Installing dependencies with pnpm..."
pnpm install --no-frozen-lockfile

# Build the project
echo "Building the project..."
pnpm run build

# Exit with the status of the build command
exit $?