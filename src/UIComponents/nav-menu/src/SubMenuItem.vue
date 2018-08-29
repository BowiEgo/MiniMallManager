<template>
  <div class="sub-menu-item" @click="handleClick">
    <a href="javascript:void(0);" :class="{ 'active': active }">{{ text }}</a>
  </div>
</template>

<script>
export default {
  name: 'BSubMenuItem',
  props: {
    text: {
      type: String
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus" scoped>
.sub-menu-item
  a
    color #B3B8C3
    display block
    padding 8px 0 8px 40px
    text-decoration none
    &.active
      color #fff
    &:hover
      color #fff
</style>

