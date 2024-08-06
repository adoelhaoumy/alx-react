<<<<<<< HEAD
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
=======
t path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("./dist"),
  },
  devServer: {
    hot: true,
    contentBase: path.resolve("./dist"),
    compress: true,
    port: 8564,
  },
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
<<<<<<< HEAD
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // type: 'asset/resource',
=======
        test: /\.(gif|png|jpe?g|svg)$/i,
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
<<<<<<< HEAD
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    static: "./dist",
    compress: true,
    open: true,
    hot: true,
    port: 8564,
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      name: "index.html",
      inject: false,
      template: "./dist/index.html",
    }),
  ],
=======
    ],
  },
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
};
