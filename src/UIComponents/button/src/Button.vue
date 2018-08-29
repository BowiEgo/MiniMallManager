<template>
  <button
    :class="['b-button', typeClass] "
    :style="styles"
    :disabled="this.disabled ? 'disabled' : false"
    @click="handleClick">
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'BButton',

  props: {
    type: {
      type: String,
      default: 'primary'
    },
    styles: {
      type: Object,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    typeClass() {
      return this.type ? 'b-button-' + this.type : ''
    }
  },

  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus" scoped>
.b-button
  padding 8px 14px
  border-radius 3px
  background-color #556b8d
  color #fff
  font-size 14px
  font-weight 700
  letter-spacing 2px
  cursor pointer
  &:disabled
    cursor not-allowed
    opacity 0.6
    &:hover
      opacity 0.6
  &:hover
    opacity 0.9
  &.b-button-primary
    background-color $highlight-color
  &.b-button-cancel
    background-color #8f96a0
  &.b-button-success
    background-color $main-color
</style>
