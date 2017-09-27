import webpack from 'webpack'
import path from 'path'
import HTMLWebPackPlugin from 'html-webpack-plugin'

const HTMLWebPackPluginConfig = new HTMLWebPackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
}

const base = {
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
}

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  plugins: [HTMLWebPackPluginConfig]
}
const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [HTMLWebPackPluginConfig, productionPlugin]
}

const LAUNCH_COMMAND = process.env.npm_lifecycle_event
const isProduction = (LAUNCH_COMMAND === 'production')

export default Object.assign({}, base,
  isProduction === true ?
  productionConfig :
  developmentConfig
)
