// This is a custom build plugin for Netlify
// It will run before the build and install dependencies without frozen lockfile

exports.onPreBuild = async ({ utils }) => {
  try {
    console.log('Installing dependencies with pnpm...');
    await utils.run.command('pnpm install --no-frozen-lockfile');
    console.log('Dependencies installed successfully');
  } catch (error) {
    console.error('Error installing dependencies:', error);
    return utils.build.failBuild('Failed to install dependencies');
  }
};