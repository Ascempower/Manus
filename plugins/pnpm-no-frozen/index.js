module.exports = {
  onPreBuild: async ({ utils }) => {
    try {
      console.log('Installing dependencies with pnpm without frozen lockfile...');
      await utils.run.command('pnpm install --no-frozen-lockfile');
      console.log('Dependencies installed successfully');
    } catch (error) {
      console.error('Error installing dependencies:', error);
      return utils.build.failBuild('Failed to install dependencies');
    }
  }
};