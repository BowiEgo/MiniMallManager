<template>
  <li
    class="b-select-dropdown__item"
    @click="handleClick">
    <slot>
      <span>{{ label }}</span>
    </slot>
  </li>
</template>

<script>
export default {
  name: 'BOption',
  props: {
    value: {
      required: true
    },
    label: {
      type: String,
      default: '选项'
    }
  },
  methods: {
    handleClick () {
      this.$BUIEventHub.$emit('handleOptionClick', { option: this, byClick: true })
    }
  }
}
</script>

<style lang="stylus" scoped>
.b-select-dropdown__item
  height 34px
  padding 0 20px
  line-height 34px
  font-size 14px
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
  color #606266
  cursor pointer
  text-align left
  &:hover
    background-color #f5f7fa
</style>

