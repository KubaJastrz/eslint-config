# @kubajastrz/eslint-config-airbnb

<a href="https://www.npmjs.com/package/@kubajastrz/eslint-config-airbnb">
  <img alt="npm package version" src="https://img.shields.io/npm/v/@kubajastrz/eslint-config-airbnb">
<a>
<a href="https://github.com/KubaJastrz/eslint-config/actions?query=workflow%3Amain">
  <img alt="Pipeline Validate Status" src="https://img.shields.io/github/workflow/status/KubaJastrz/eslint-config/main">
<a>

## Features

Current list of supported features:

- [Eslint][] configuration basing on [Airbnb][] preset for [React][]
- Support for [TypeScript][]\* & [Prettier][] out-of-the-box
- Optional preset for [Jest][] test runner
- Extended `airbnb/base`, if you don't use React

\* Important: Using Typescript is required for now.

## Usage

Install the configuration and required dependencies with [`install-peerdeps`][install-peerdeps]:

```bash
npx install-peerdeps --dev @kubajastrz/eslint-config-airbnb
```

You can now add the presets of choice to your [Eslint configuration file][].

### React

```js
// .eslintrc.js
module.exports = {
  extends: ['@kubajastrz/eslint-config-airbnb', '@kubajastrz/eslint-config-airbnb/jest'],
  parserOptions: {
    project: './tsconfig.json',
  },
};
```

### Create React App

Projects basing on [create-react-app][] require different preset, due to
[its annoying nature in v4.0](https://github.com/facebook/create-react-app/issues/9887#issuecomment-720902192).
This configuration turns every rule with `"error"` severity to `"warn"` to workaround this problem.

```js
// .eslintrc.js
module.exports = {
  extends: [
    '@kubajastrz/eslint-config-airbnb/create-react-app',
    '@kubajastrz/eslint-config-airbnb/jest',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
};
```

### Base (no React)

You can also use the base preset, which extends from `eslint-config-airbnb/base`, if you don't use
React in your project.

```js
// .eslintrc.js
module.exports = {
  extends: ['@kubajastrz/eslint-config-airbnb/base', '@kubajastrz/eslint-config-airbnb/jest'],
  parserOptions: {
    project: './tsconfig.json',
  },
};
```

## License

[MIT][license]

<!-- prettier-ignore-start -->

[airbnb]: https://npmjs.com/eslint-config-airbnb
[create-react-app]: https://create-react-app.dev/
[eslint configuration file]: https://eslint.org/docs/user-guide/configuring
[eslint]: https://eslint.org/
[install-peerdeps]: https://www.npmjs.com/package/install-peerdeps
[jest]: https://jestjs.io/
[license]: https://github.com/KubaJastrz/eslint-config/blob/master/LICENSE
[prettier]: https://prettier.io/
[react]: https://reactjs.org/
[typescript]: https://www.typescriptlang.org/

<!-- prettier-ignore-end -->
