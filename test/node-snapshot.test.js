const path = require('path');

const { getConfigForFile, removeAbsolutePath } = require('./utils');

it('computed config matches generated snapshot', async () => {
  const computedConfig = await getConfigForFile({
    baseConfig: require('../index.js'),
    filePath: path.resolve(__dirname, 'sample/node.js'),
  });
  computedConfig.parser = removeAbsolutePath(computedConfig.parser);
  expect(computedConfig).toMatchSnapshot();
});
