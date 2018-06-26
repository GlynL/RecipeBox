const path = require("path");

// entry point -> output

module.exports = {
  entry: "./src/app.js",
  output: {
    // node function - makes sure the path works across all filesystems
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  // loader - npm i babel-core babel-loader
  // also .babelrc file for presets
  module: {
    rules: [
      {
        // all js files except node_modules folder - anything app.js imports
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        // '?' means the s optional (scss and css files)
        test: /\.s?css$/,
        // use allows us to have multiple loaders
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public")
  },
  // webpack 4 requirement
  mode: "development"
};
