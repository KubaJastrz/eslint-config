const { CLIEngine } = require('eslint');

const baseConfig = require('./react');

const severities = ['off', 'warn', 'error'];

/**
 * @param {import('eslint').Linter.RuleEntry} ruleConfig
 * @returns {import('eslint').Linter.RuleLevel}
 */
function getSeverity(ruleConfig) {
  if (Array.isArray(ruleConfig)) {
    return getSeverity(ruleConfig[0]);
  }
  if (typeof ruleConfig === 'number') {
    return severities[ruleConfig];
  }
  return ruleConfig;
}

function changeErrorToWarn(config) {
  const warningsOnly = Object.assign({}, config);
  const cli = new CLIEngine({ baseConfig: config, useEslintrc: false });
  const { rules } = cli.getConfigForFile(require.resolve('./react'));

  Object.entries(rules).forEach((rule) => {
    const ruleName = rule[0];
    const ruleConfig = rule[1];
    const severity = getSeverity(ruleConfig);

    if (severity === 'error') {
      if (Array.isArray(ruleConfig)) {
        warningsOnly.rules[ruleName] = ['warn'].concat(ruleConfig.slice(1));
      } else if (typeof ruleConfig === 'number') {
        warningsOnly.rules[ruleName] = 1;
      } else {
        warningsOnly.rules[ruleName] = 'warn';
      }
    }
  });

  return warningsOnly;
}

module.exports = changeErrorToWarn(baseConfig);
