const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  stats: 'errors-only',
  mode: 'development',
  entry: './src/server/index.ts',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000 // 每秒检查一次文件变化
  },
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};