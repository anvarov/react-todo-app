const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public", "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [{ loader: "css-loader" }, { loader: "sass-loader" }],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
  },
};
