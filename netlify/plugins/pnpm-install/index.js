// Custom Netlify plugin to handle pnpm installation without frozen lockfile
module.exports = {
  onPreBuild: async ({ utils }) => {
    console.log('Running custom pnpm install without frozen lockfile');
    
    try {
      // Create .npmrc file to bypass frozen-lockfile check
      console.log('Creating .npmrc file to bypass frozen-lockfile check');
      await utils.run.command('node netlify-ignore-lockfile.js');
      
      // Run pnpm install without frozen lockfile
      console.log('Installing dependencies with pnpm without frozen lockfile');
      await utils.run.command('pnpm install --no-frozen-lockfile');
      
      console.log('Successfully installed dependencies with pnpm');
    } catch (error) {
      // Log the error but don't fail the build yet
      console.error('Error during pnpm install:', error);
      utils.build.failBuild('Failed to install dependencies with pnpm');
    }
  }
};