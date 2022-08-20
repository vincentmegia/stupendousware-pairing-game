const path = require('path');

const root = path.resolve(__dirname, '..');
const packages = `${root}/packages`;
const pak = require(`${packages}/package.json`);

console.log('babel.cinfig: ', path.join(__dirname, '..', pak.source));
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          [pak.name]: path.join(__dirname, '..', pak.source),
        },
      },
    ],
  ],
};
