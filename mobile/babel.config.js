const path = require('path')
const package = require('../packages/stupendousware-core/package.json')

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.ts', '.tsx'],
        alias: {
          [package.name]: path.join(
            __dirname,
            '../packages/stupendousware-core',
            package.source,
          ),
          '@screens': './mobile/src/screens',
          '@components': './mobile//src/components',
          '@models': './mobile//src/models',
        },
      },
    ],
  ],
}
