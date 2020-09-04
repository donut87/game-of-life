const path = require('path');

module.exports = {
  entry: {
    app: './src/spaghetti/index.ts',
    clean: './src/clean/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts' ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    // path: staticPath
  },
};
