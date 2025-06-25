# Makefile for Choice Insurance Website

.PHONY: install build publish clean help

# Default target
help:
	@echo "Available targets:"
	@echo "  install  - Install dependencies"
	@echo "  build    - Build the Next.js application"
	@echo "  publish  - Build and prepare for production deployment"
	@echo "  clean    - Clean build artifacts"

# Install dependencies
install:
	pnpm install --frozen-lockfile

# Build the application
build:
	pnpm run build

# Production publish target
publish: install build
	@echo "Preparing production build..."
	@rm -rf output
	@mkdir -p output
	@cp -r out/* output/
	@echo "Production build ready in output/ directory"

# Clean build artifacts
clean:
	@rm -rf .next out output dist
	@echo "Build artifacts cleaned"