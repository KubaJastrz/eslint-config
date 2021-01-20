module.exports = {
  semi: true,
  tabWidth: 2,
  bracketSpacing: true,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  proseWrap: 'preserve',
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'always',
      },
    },
  ],
};
