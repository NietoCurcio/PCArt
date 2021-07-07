const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/js/script.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/script.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          { loader: 'file-loader', options: { name: 'images/[name].[ext]' } },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: false,
              mozjpeg: {
                progressive: true,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.html',
      filename: 'contact.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html',
      inject: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
}
