<template>
  <div :class="['b-input', { 'focus': focused }]">
    <input
      type="text"
      v-if="type === 'text'"
      class="b-input_innter"
      :value="currentValue"
      :placeholder="placeholder"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      @change="handleChange">
    <textarea
      v-else
      class="b-input_innter"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      @change="handleChange"
      :placeholder="placeholder"
      :style="{ height: 20 * row + 'px' }">
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'BInput',
  data () {
    return {
      currentValue: '',
      focused: false
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    row: {
      type: Number,
      default: 1
    },
    placeholder: {
      type: String,
      default: 'placeholder'
    }
  },
  methods: {
    handleFocus (event) {
      this.focused = true
      this.$emit('focus', event)
    },
    handleBlur (event) {
      this.focused = false
      this.$emit('blur', event)
    },
    handleInput (event) {
      const value = event.target.value
      this.currentValue = value
      this.$emit('input', value)
    },
    handleChange (event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
.b-input
  flex 1
  border 2px solid #e8ebed
  background-color #fff
  transition border-color 0.2s ease
  &:hover
    border-color #c6d2e4
  &.focus
    border-color #657c9e
  input
    width 100%
    height 37px
    background-color inherit
    vertical-align middle
    &::placeholder
      color #b5b5b5
  textarea
    width 100%
    resize vertical
    background-color inherit
    border none
    outline none
    &::placeholder
      color #b5b5b5
</style>
