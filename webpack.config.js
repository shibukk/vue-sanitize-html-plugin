const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var config = {
  output: {
    path: path.resolve(`${__dirname}/dist/`)
  },
  module: {
    rules: [
      {
        test: /\.js$/
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: false,
      uglifyOptions: {
        mangle: true,
        compress: {
          warnings: false
        }
      }
    })
  ]
};

module.exports = [
  merge(config,
    {
      entry: path.resolve(__dirname + '/src/vue-sanitize-html-plugin.js'),
      output: {
        filename: 'vue-sanitize-html-plugin.js',
        libraryTarget: 'umd',
        library: 'vue-sanitize-html-plugin',
        umdNamedDefine: true
      }
    })
];
