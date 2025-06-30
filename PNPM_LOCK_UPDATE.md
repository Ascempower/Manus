# How to Update the pnpm-lock.yaml File

If you're experiencing build issues with Netlify related to the pnpm-lock.yaml file, follow these steps to update it locally:

## Option 1: Update the lock file

1. Clone the repository locally
2. Run the following command to update the lock file:
   ```
   pnpm install --no-frozen-lockfile
   ```
3. Commit and push the updated pnpm-lock.yaml file

## Option 2: Regenerate the lock file

If Option 1 doesn't work, you can try regenerating the lock file:

1. Delete the existing pnpm-lock.yaml file
2. Run `pnpm install` to generate a new lock file
3. Commit and push the updated files

## Troubleshooting

If you're still experiencing issues, try the following:

1. Make sure you're using the same version of pnpm as Netlify (run `pnpm --version`)
2. Check for any peer dependency issues in your package.json
3. Try running the build locally with `pnpm run build` to see if there are any errors