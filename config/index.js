const { NODE_ENV, ...restEnvVars } = process.env;

// noinspection JSIncompatibleTypesComparison
module.exports = {
  IS_PROD: NODE_ENV === 'production',
  ...restEnvVars
};
