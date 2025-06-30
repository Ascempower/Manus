// Custom Netlify plugin to handle pnpm installation without frozen lockfile
module.exports = {
  onPreBuild: async ({ utils }) => {
    console.log('Running custom pnpm install without frozen lockfile');
    
    try {
      // Run pnpm install without frozen lockfile
      await utils.run.command('pnpm install --no-frozen-lockfile');
      console.log('Successfully installed dependencies with pnpm');
    } catch (error) {
      // Log the error but don't fail the build yet
      console.error('Error during pnpm install:', error);
      utils.build.failBuild('Failed to install dependencies with pnpm');
    }
  }
};