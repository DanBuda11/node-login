const path = require('path');
const webpack = require('webpack');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, arg) => {
  const config = {
    entry: './public/js/index.js',
    output: {
      path: path.resolve(__dirname, 'public', 'dist'),
      filename: 'fuckyou.js',
    },
    devServer: {
      compress: true,
      contentBase: 'public',
      watchContentBase: true,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      // new MiniCssExtractPlugin({
      //   filename: '[name].css',
      //   chunkFilename: '[id].css',
      // }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  };

  // if (arg.mode === 'production') {
  //   config.optimization = {
  //     minimizer: [
  //       new UglifyjsWebpackPlugin({
  //         uglifyOptions: {
  //           output: {
  //             comments: false,
  //           },
  //         },
  //       }),
  //     ],
  //   };
  // }

  return config;
};
