const path = require('path')
const { default: build } = require('vue-svgicon/dist/lib/build')
const svgSourcePath = path.resolve(__dirname, '..', 'src/assets/svgs')
const targetPath = path.resolve(__dirname, '..', 'src/icons')

build({
  sourcePath: svgSourcePath,
  targetPath: targetPath,
  ext: 'js',
  es6: true
  // tpl?: '';
  // idSP?: '_';
  // svgo?: 'Configuration file path' || {/* svgo config object */}
})
