module.exports = {
  devServer: {
    port: 8089
  },
  productionSourceMap: false,
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .exclude
      .add(/node_modules/)
      .end()
      .oneOf('file-loader')
      // match for /path/to/a.svg?standalone
      .resourceQuery(/standalone/)
      .use('file-loader')
      .loader('file-loader')
      .tap(options => ({
        name: 'img/[name].[hash:8].[ext]'
      }))
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .end()
      .end()
      .oneOf('svg-sprite-loader')
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .tap(options => ({
        plugins: [
          {
            removeAttrs: {
              // see svgo@1.0.5 https://github.com/svg/svgo/blob/master/plugins/removeAttrs.js#L70
              attrs: '.*:(fill|stroke):.*'
            }
          }
        ]
      }))
  }
}
