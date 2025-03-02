const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  target: 'web',
  mode: 'production',
  entry: {
    app: path.join(__dirname, './src/index.js'),
    // styles: path.join(__dirname, './src/scss/index.scss')
  },
  output: {
    publicPath: '/',
    filename: 'js/[name].bundle.js',
    path: path.join(__dirname, './dist/assets/'),
    chunkFilename: '[name]-[id].js'
  },
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { 
        test: /\.js$/, use: ['babel-loader'] 
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: false,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css',
    }),
  ]
}