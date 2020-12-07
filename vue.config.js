const path = require("path");

module.exports = {
  publicPath: "/",
  // lintOnSave: process.env.NODE_ENV !== "production", // 生产构建时 lint错误不会编译失败
  lintOnSave: false, // 生产构建时 lint错误不会编译失败
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/style.less")]
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8094,
  },
}
