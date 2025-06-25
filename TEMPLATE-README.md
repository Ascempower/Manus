# Manus Site Template - Restoration Guide

## Template Information

This repository maintains a clean, working template of the Manus site that can be used for restoration when issues occur.

### Template Details
- **Commit Hash:** `240053a`
- **Branch:** `original-template`
- **Date:** May 22, 2025
- **Description:** Clean template with VGS integration managed through Netlify UI
- **Status:** Verified working state before PWA corruption

## Template Features

### Current Configuration
- ✅ Next.js application with TypeScript
- ✅ Tailwind CSS styling
- ✅ VGS integration (managed via Netlify UI)
- ✅ Arcjet security integration
- ✅ Contact forms with secure handling
- ✅ SEO optimized pages
- ✅ Accessibility compliant
- ✅ Netlify deployment ready

### Netlify Configuration
```toml
# VGS Integration is managed through the Netlify UI
# See vgs-integration-notes.md for details
```

## How to Restore Template

### Method 1: Quick Restoration (Recommended)
```bash
# Reset current branch to template without stash
git reset --hard HEAD

# Switch to template branch
git checkout original-template

# Reset main branch to template
git checkout main
git reset --hard original-template

# Force push to restore live site
git push origin main --force
```

### Method 2: Using Commit Hash
```bash
# Reset any local changes
git reset --hard HEAD

# Reset to specific template commit
git reset --hard 240053a

# Force push to restore live site
git push origin main --force
```

### Method 3: Create New Branch from Template
```bash
# Create new branch from template
git checkout -b restored-site original-template

# Work on the new branch, then merge when ready
git checkout main
git merge restored-site
```

## Template Access Methods

### Available References
1. **Commit Hash:** `240053a`
2. **Local Branch:** `original-template`
3. **Remote Branch:** `origin/original-template`

### Verification Commands
```bash
# Check template commit details
git show 240053a --oneline

# List all branches
git branch -a

# View template branch
git checkout original-template
```

## When to Use Template Restoration

### Common Scenarios
- ❌ PWA implementation corrupts the site
- ❌ Build failures due to configuration changes
- ❌ Dependency conflicts breaking functionality
- ❌ Experimental features causing instability
- ❌ Plugin failures (like netlify-plugin-bundle-env)
- ❌ Need to revert to known working state

### Warning Signs
- Netlify build failures
- "PWA Validation failed" errors
- Plugin installation/configuration errors
- Site not loading properly
- Missing or broken functionality
- Configuration conflicts

## Post-Restoration Steps

### After Template Restoration
1. **Verify Site Functionality**
   - Check all pages load correctly
   - Test contact forms
   - Verify responsive design

2. **Update Dependencies (if needed)**
   ```bash
   pnpm install
   pnpm update
   ```

3. **Run Local Tests**
   ```bash
   pnpm run dev
   pnpm run build
   ```

4. **Deploy to Netlify**
   - Push changes trigger automatic deployment
   - Monitor build logs for any issues

## Template Maintenance

### Updating the Template
When you have a new stable version:

```bash
# Create new template branch
git checkout -b new-template-YYYY-MM-DD

# Test thoroughly, then update original-template
git checkout original-template
git reset --hard new-template-YYYY-MM-DD

# Push updated template
git push origin original-template --force
```

### Template Backup
The template is backed up in multiple locations:
- Local `original-template` branch
- Remote `origin/original-template` branch
- Commit `240053a` (permanent reference)

## Troubleshooting

### If Restoration Fails
1. **Check Git Status**
   ```bash
   git status
   git log --oneline -5
   ```

2. **Force Clean Restoration**
   ```bash
   git reset --hard HEAD
   git clean -fd
   git checkout original-template
   git checkout main
   git reset --hard original-template
   ```

3. **Verify Template Integrity**
   ```bash
   git show original-template --stat
   git diff original-template 240053a
   ```

### Plugin Issues
If plugins fail (like netlify-plugin-bundle-env):
1. Remove plugin from netlify.toml
2. Restore to clean template
3. Test alternative solutions
4. Only add plugins after thorough testing

## Important Notes

### Files That Get Restored
- ✅ All source code files
- ✅ Configuration files (netlify.toml, package.json, etc.)
- ✅ Dependencies and build settings
- ❌ **This README file will be deleted during restoration**

### After Restoration
- **Always recreate this TEMPLATE-README.md file**
- Commit it separately to preserve documentation
- Consider adding it to the original-template branch

## Contact & Support

If you encounter issues with template restoration:
1. Check this README for common solutions
2. Verify the template branches exist
3. Ensure you have the correct commit hash
4. Test locally before pushing to production

---

**Last Updated:** December 2024  
**Template Version:** 240053a  
**Status:** ✅ Verified Working  
**Note:** This file gets deleted during template restoration - recreate after each restore