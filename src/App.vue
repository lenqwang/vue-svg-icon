<script>
import roleSvg from '@/assets/svg/role.svg'
import roleImage from '@/assets/svg/role.svg?standalone'

export default {
  name: 'App',
  data () {
    return {
      icons: {
        role: roleSvg
      },
      images: {
        roleImage
      },
      color: '',
      size: 12
    }
  },

  computed: {
    realSize () {
      return this.size + 'px'
    }
  },

  methods: {
    async loadIcon (systemName = 'system') {
      await import(`@/icons/${systemName}/index`)
    },

    getIconName (iconName, systemName = 'system') {
      return systemName ? `${systemName}/${iconName}` : iconName
    }
  }
}
</script>

<template>
  <div :class="$style.App">
    <div>
      <h1>Svg Icon Preview</h1>
      <div>
        <label for="" :class="$style.Label">
          <span>颜色：</span>
          <input type="color" v-model="color" />
        </label>
        <label for="" :class="$style.Label">
          <span>大小：</span>
          <input type="range" v-model="size" min="10" max="300">
          <span>{{ size }}px</span>
        </label>
      </div>
      <div :class="$style.Icon" :style="{ color }">
        <!-- specify icon id by import svg icon asset -->
        <svg-icon
          :name="icons.role.id"
          :viewBox="icons.role.viewBox"
          :width="size"
          :height="size"
        ></svg-icon>

        <!-- only specify icon name -->
        <svg-icon
          name="table"
          :width="size"
          :height="size"
        ></svg-icon>
      </div>
    </div>

    <!-- svg for image preview -->
    <div>
      <h1>Svg Image Preview</h1>
      <div>
        <svg-icon
          :path="images.roleImage"
          :width="size"
          :height="size"
          alt="role"
        ></svg-icon>
      </div>
    </div>

    <!-- from vue svg-icon -->
    <h1>From vue-svgicon package</h1>
    <button @click="loadIcon()">加载icon图标</button>
    <div :style="{ color }">
      <svg-icons class="svg-icons" :name="getIconName('editor-bgcolor')" color="currentColor" :width="realSize" :height="realSize"></svg-icons>
      <svg-icons class="svg-icons" :name="getIconName('editor-sort')" color="currentColor" :width="realSize" :height="realSize"></svg-icons>
      <svg-icons class="svg-icons" :name="getIconName('editor-table')" color="currentColor" :width="realSize" :height="realSize"></svg-icons>
      <svg-icons class="svg-icons" :name="getIconName('editor-disconnect')" color="currentColor" :width="realSize" :height="realSize"></svg-icons>
    </div>
  </div>
</template>

<style lang="scss" module>
.App {
  padding: 10px;
}

.Icon {
  color: #333;
}

.Label {
  display: block;
  margin-bottom: 10px;
}

:global {
  .svg-icons {
    &:hover {
      color: blue;
    }
  }
}
</style>
