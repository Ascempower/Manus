# How to Update the Lock File

If you're experiencing build issues with Netlify related to the pnpm-lock.yaml file, follow these steps:

1. Clone the repository locally
2. Run the update script:
   ```
   node update-lock.js
   ```
3. Commit and push the updated package.json and pnpm-lock.yaml files

This will ensure that the lock file is in sync with the package.json file and includes all the necessary dependencies.

## Manual Update

If the script doesn't work, you can manually update the lock file:

1. Delete the existing pnpm-lock.yaml file
2. Run `pnpm install` to generate a new lock file
3. Commit and push the updated files