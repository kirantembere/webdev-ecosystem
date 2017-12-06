module.exports = {
  entry : ["../webdev-ecosystem/app/ts/index.ts"],
  devtool: 'inline-source-map',
  output: {
    filename : "../webdev-ecosystem/build/dev-bundle.js"
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  }
}
