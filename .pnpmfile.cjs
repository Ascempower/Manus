// This file is used to modify pnpm's behavior
// It ensures that the package.json is always used as the source of truth

module.exports = {
  hooks: {
    readPackage(pkg) {
      // You can modify the package here
      return pkg;
    },
  },
};