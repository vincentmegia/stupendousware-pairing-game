const path = require('path')
const exclusionList = require('metro-config/src/defaults/exclusionList')
const escape = require('escape-string-regexp')
const pak = require('../packages/stupendousware-core/package.json')

const root = path.resolve(__dirname, '..')
const packages = path.join(root, 'packages')
const modules = Object.keys({
  ...pak.peerDependencies,
})

module.exports = {
  server: {port: 8088},
  projectRoot: path.join(__dirname, '..'),
  watchFolders: [packages, `${packages}/stupendousware-core`],
  // We need to make sure that only one version is loaded for peerDependencies
  // So we block them at the root, and alias them to the versions in example's node_modules
  resolver: {
    //block from packages/stupendousware-core
    blacklistRE: exclusionList(
      modules.map(
        m =>
          new RegExp(
            `^${escape(
              path.join(root, '/packages/stupendousware-core/node_modules', m),
            )}\\/.*$`,
          ),
      ),
    ),
    //add from mobile/node_modulesr
    extraNodeModules: modules.reduce((acc, name) => {
      acc[name] = path.join(__dirname, 'node_modules', name)
      return acc
    }, {}),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
}
