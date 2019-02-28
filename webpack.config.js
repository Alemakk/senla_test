const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/taskPages/task1.html',
      filename: './taskPages/task1.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/taskPages/task2.html',
      filename: './taskPages/task2.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/taskPages/task3.html',
      filename: './taskPages/task3.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/taskPages/task4.html',
      filename: './taskPages/task4.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/taskPages/task5.html',
      filename: './taskPages/task5.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/taskPages/task6.html',
      filename: './taskPages/task6.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/taskPages/task7.html',
      filename: './taskPages/task7.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}
