<script>
export default {
  name: 'SvgIcon',
  props: {
    width: [String, Number],
    height: [String, Number],
    viewBox: {
      type: String,
      default: '0 0 18 18'
    },
    type: {
      type: String,
      default: 'svg',
      validator (val) {
        if (/^svg|image$/.test(val)) {
          return true
        }

        console.warn('[SvgIcon] Icon type must between `svg` and `image` for optional!')

        return false
      }
    },
    name: {
      type: String,
      validator (val) {
        if (/^\#.+/.test(val)) {
          console.warn('[SvgIcon] name must be start without `#`')
          return false
        }

        return true
      },
      default: ''
    },
    color: {
      type: String,
      default: 'currentColor'
    },
    path: {
      type: String,
      validator (val) {
        if (/\.svg$/.test(val)) {
          return true
        }

        console.warn('[SvgIcon] path must be end with .svg!')

        return false
      }
    },
    alt: {
      type: String,
      default: 'svgIcon'
    }
  },
  computed: {
    iconName () {
      return `#${this.name}`
    },

    imgStyle () {
      const width = this.numeric(this.width)
      const height = this.numeric(this.height)

      return {
        width: `${width}px`,
        height: `${height}px`
      }
    }
  },

  methods: {
    numeric (val) {
      return typeof val === 'string' ? Number.parseInt(val, 10) : val 
    }
  }
}
</script>

<template>
  <svg
    v-if="name"
    :class="$style.SvgIcon"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="name"
    role="presentation"
  >
    <use :xlink:href="iconName"></use>
  </svg>
  <img 
    v-else-if="path" 
    :style="imgStyle"
    :src="path" 
    :alt="alt"
  />
</template>

<style lang="scss" module>
  .SvgIcon {
    fill: currentColor;
  }
</style>


