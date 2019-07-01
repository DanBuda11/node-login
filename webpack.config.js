const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, arg) => {
  const config = {
    entry: './public/js/index.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js',
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
              loader:
                arg.mode === 'production'
                  ? MiniCssExtractPlugin.loader
                  : 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: arg.mode === 'development',
                importLoaders: 2,
              },
            },
            { loader: 'postcss-loader' },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: arg.mode === 'development',
              },
            },
          ],
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin({})],
  };

  if (arg.mode === 'production') {
    config.optimization = {
      minimizer: [
        new UglifyjsWebpackPlugin({
          uglifyOptions: {
            output: {
              comments: false,
            },
          },
        }),
      ],
    };
  }

  return config;
};
