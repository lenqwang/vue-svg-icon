import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'
import VueSvgIcon from 'vue-svgicon'

export default function setup () {
  const components = [
    SvgIcon
  ]

  components.forEach(cmpt => {
    Vue.component(cmpt.name, cmpt)
  })

  // const requireAll = requireContext => requireContext.keys().map(requireContext)
  function importAll (r) {
    r.keys().forEach(r)
  }
  // see https://webpack.docschina.org/guides/dependency-management/#require-context
  const assetsRule = require.context('./assets/svg', true, /\.svg$/)

  importAll(assetsRule)

  // install VueSvgIcon
  Vue.use(VueSvgIcon, {
    tagName: 'svg-icons',
    defaultWidth: '2em',
    defaultHeight: '2em'
  })
}
