const { ESLint } = require('eslint');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function getConfigForFile({ baseConfig, filePath }) {
  const eslint = new ESLint({
    baseConfig,
    useEslintrc: false,
    cwd: rootDir,
  });
  return eslint.calculateConfigForFile(filePath);
}

function removeAbsolutePath(pathToFile, replacement = '') {
  return pathToFile.replace(rootDir, replacement);
}

module.exports = {
  rootDir,
  getConfigForFile,
  removeAbsolutePath,
};
