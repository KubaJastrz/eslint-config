const path = require('path');

const { getConfigForFile, removeAbsolutePath } = require('./utils');

it('computed config matches generated snapshot', async () => {
  const computedConfig = await getConfigForFile({
    baseConfig: require('../create-react-app.js'),
    filePath: path.resolve(__dirname, 'sample/react-typescript.tsx'),
  });
  computedConfig.parser = removeAbsolutePath(computedConfig.parser);
  expect(computedConfig).toMatchSnapshot();
});
