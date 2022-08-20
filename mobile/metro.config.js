const path = require('path');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const root = path.resolve(__dirname, '..');
const mobile = `${root}/mobile`;
const packages = `${root}/packages`;

module.exports = {
  projectRoot: root,
  watchFolders: [root],
  // We need to make sure that only one version is loaded for peerDependencies
  // So we block them at the root, and alias them to the versions in example's node_modules
  resolver: {
    extraNodeModules: {
      react: `${mobile}/node_modules/react`,
      'react-native': `${mobile}/node_modules/react-native`,
      // "stupendousware-core": `${moduleRoot}/packages/stupendousware-core`,
    },
    blockList: exclusionList([
      new RegExp(`${packages}/stupendousware-core/.*`),
      // new RegExp(`${packages}/stupendousware-core/node_modules/react/.*`),
      // new RegExp(`${packages}/stupendousware-core/example/.*`),
      // new RegExp(`${packages}/stupendousware-core/example/node_modules/.*`),
    ]),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
