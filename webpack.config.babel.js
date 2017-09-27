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
        loader: 'style-loader!css-loader?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]-loader',
      }

    ]
  },
  resolve: {
    modules: [path.resolve("./app"), "node_modules"]
  }
}

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    progress: true,
  },
  plugins: [HTMLWebPackPluginConfig, new webpack.HotModuleReplacementPlugin()]
}
const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [HTMLWebPackPluginConfig, productionPlugin]
}

const LAUNCH_COMMAND = process.env.npm_lifecycle_event
const isProduction = (LAUNCH_COMMAND === 'production')
process.env.BABEL_ENV = LAUNCH_COMMAND

export default Object.assign({}, base,
  isProduction === true ?
  productionConfig :
  developmentConfig
)
