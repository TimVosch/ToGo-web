const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimeCSSPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: ["./src/index.tsx"],
  // devtool: "",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [
                require("tailwindcss"),
                require("autoprefixer"),
                require("@fullhuman/postcss-purgecss")({
                  content: ["./src/**/*.tsx"],
                }),
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
      // Must be below test-utils
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: "/",
    filename: "app.min.js",
  },
  optimization: {
    minimizer: [new TerserPlugin(), new OptimeCSSPlugin()],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
