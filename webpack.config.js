const commonConfig = require('./webpack.common');
const developmentConfig = require('./webpack.dev');
const productionConfig = require('./webpack.prod');

const { merge } = require('webpack-merge');

module.exports = (env, args) => {
  switch (args.mode) {
    case 'production':
      return merge(commonConfig, productionConfig);
    case 'development':
      return merge(commonConfig, developmentConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
};
