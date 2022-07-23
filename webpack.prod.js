const path = require('path');
module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].[contenthash].js',
    clean: true,
  },
  devtool: false,
};
