module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  css: { sourceMap: true },
  publicPath: process.env.NODE_ENV === 'production' ? '/test-task-oil/' : '/',
};
