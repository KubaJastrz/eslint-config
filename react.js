module.exports = {
  extends: ['airbnb-typescript', 'airbnb/hooks', 'prettier/react'],
  plugins: [],
  rules: {
    // Disable too restrictive rule
    // https://github.com/yannickcr/eslint-plugin-react/blob/e2eaadae/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',

    // Disable outdated rule in plain JavaScript. In TypeScript it's already checked by the compiler.
    // https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    // https://github.com/yannickcr/eslint-plugin-react/blob/e2eaadae/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': 'off',
  },
};
