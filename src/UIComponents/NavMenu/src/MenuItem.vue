<template>
  <div :class="['menu-item', {'active': active}, {'open' : isOpen}, {'right': right}]"
    @mouseover="handleMouseover"
    @mouseout="handleMouseout">
    <div class="title" @click="handleClick">{{ title }}</div>
    <i :class="['fa',' fa-chevron-right', 'icon-right', {'open': isOpen}, {'active': active}, {'hover': isHover}]"
      aria-hidden="true"
      v-if="right">
    </i>
    <collapse-transition>
      <div class="sub-menu" v-show="isOpen">
        <slot></slot>
      </div>
    </collapse-transition>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  data () {
    return {
      isOpen: false,
      isHover: false
    }
  },
  props: {
    title: {
      type: String,
      default: '标题'
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    path: {
      type: String
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isOpened (val) {
      this.isOpen = val
    }
  },
  methods: {
    handleClick () {
      if (this.path) {
        this.$emit('goRouter', [ this.path, false ])
        return
      }
      this.isOpen = !this.isOpen
      this.$emit('open', true)
    },
    handleMouseover () {
      this.isHover = true
    },
    handleMouseout () {
      this.isHover = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/transition.styl'
.menu-item
  position relative
  width 100%
  margin-top 3px
  cursor pointer
  text-align left
  &.open
    .title
      background-color #fff
      color #000
      &:hover
        background-color #fff
        color #000
  &.active
    .title
      background-color #27b6af
      color #fff
      &:hover
        background-color #27b6af
        color #fff
  .title
    width 90%
    height 38px
    margin 0 auto
    padding 9px 10px
    border-radius 4px
    color #B3B8C3
    &:hover
      background-color #fff
      color #000
.icon-right
  position absolute
  right 10%
  top 12px
  transition transform 0.1s ease
  &.open
    color #000
    transform rotate(90deg)
  &.active
    color #fff
    transform rotate(90deg)
  // transform translateY(-50%)
</style>

