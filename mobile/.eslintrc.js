/**ya
 * Keep typescript level recommendations and linting in project level
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: '.',
  },
  ignorePatterns: ['**/*.js', '**/__tests__/*', '**/src/assets/*'],
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {
      'babel-module': {},
      typescript: {},
    },
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
}
