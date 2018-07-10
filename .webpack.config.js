const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const buildDir = 'docs';
const path = `${__dirname}/${buildDir}`

module.exports = {
  entry:'./src/index.js',
  output: {
    path,
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  devServer: {
    contentBase: `./${buildDir}`,
    port: 3000,
    compress: true,
    historyApiFallback: true
  },
  devtool: 'inline-source-map',
  plugins:[
    new CleanWebpackPlugin(`${path}/bundle.*.js`),  //try [hash]
    new HtmlPlugin({ template: './src/index.html' })
  ],
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use:[
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss',

          }

        ]
      }
    ]
  }

}