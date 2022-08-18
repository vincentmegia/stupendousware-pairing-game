const path = require("path")
const exclusionList = require("metro-config/src/defaults/exclusionList")

const moduleRoot = path.resolve(__dirname, "..")
const packages = `${moduleRoot}/packages`

module.exports = {
   projectRoot: moduleRoot,
   // We need to make sure that only one version is loaded for peerDependencies
   // So we block them at the root, and alias them to the versions in example's node_modules
   resolver: {
      extraNodeModules: {
         react: `${moduleRoot}/node_modules/react`,
         "react-native": `${moduleRoot}/node_modules/react`,
      },
      blockList: exclusionList([
         new RegExp(`${packages}/stupendousware-core/node_modules/react/.*`),
         new RegExp(`${packages}/stupendousware-core/example/.*`),
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
}
