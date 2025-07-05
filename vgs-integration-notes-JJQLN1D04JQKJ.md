# VGS Integration Notes

This file contains notes about integrating VGS (Very Good Security) with Netlify for secure form handling.

## Setup Instructions

### 1. Netlify VGS Integration
The VGS integration should be enabled through the Netlify UI rather than via netlify.toml.
See: https://www.netlify.com/integrations/very-good-security/

### 2. Environment Variables
Set these environment variables in Netlify Dashboard → Site Settings → Environment Variables:

**Required:**
- `VGS_VAULT_ID` - Your VGS vault identifier
- `VGS_ROUTE_ID` - Your VGS route identifier

**Optional (for server-side API calls):**
- `VGS_CLIENT_ID` - VGS client ID
- `VGS_CLIENT_SECRET` - VGS client secret

### 3. Plugin Configuration
❌ **DO NOT** use `netlify-plugin-bundle-env` - it causes deployment failures
✅ **USE** Netlify's built-in environment variable system instead

### 4. Local Development
For local development, copy `.env.example` to `.env.local` and fill in your VGS credentials.

## Troubleshooting

### Plugin Failures
If you see "netlify-plugin-bundle-env failed", remove the plugin from netlify.toml:
```toml
# Remove this section:
[[plugins]]
package = "netlify-plugin-bundle-env"
```

### VGS Not Loading
1. Check that environment variables are set in Netlify dashboard
2. Verify VGS script is loading in browser console
3. Ensure VGS vault and route IDs are correct
