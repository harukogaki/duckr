var path = require ('path')
var HTMLWebPackPlugin = require('html-webpack-plugin');

var HTMLWebPackPluginConfig = new HTMLWebPackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
}

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  entry: [
    PATHS.app,
  ],
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js',
  },

  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      }

    ]
  },

  plugins: [HTMLWebPackPluginConfig]
}
