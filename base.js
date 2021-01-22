module.exports = {
  extends: [
    'airbnb/base',
    require.resolve('./rules/prettier.js'),
    require.resolve('./rules/typescript.js'),
  ],
  plugins: [],
  rules: {},
};
