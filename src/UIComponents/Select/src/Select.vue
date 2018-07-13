<template>
  <div
    class="b-select"
    @click="toggleMenu"
    v-clickoutside="handleClose">
    <input
      class="b-select__inner"
      :class="[{ 'active' : visible }]"
      type="text"
      v-model="selectedLabel"
      :placeholder="placeholder"
      readonly="readonly">
    <i class="fa fa-angle-down icon-arrow" :class="{'up' : visible}" aria-hidden="true"></i>
    <transition name="dropdown">
      <b-select-dropdown v-show="visible">
        <slot></slot>
      </b-select-dropdown>
    </transition>
  </div>
</template>

<script>
import Clickoutside from '../../utils/clickoutside'
import BSelectDropdown from './SelectDropdown'

export default {
  name: 'BSelect',
  components: {
    BSelectDropdown
  },
  directives: { Clickoutside },
  data () {
    return {
      visible: false,
      selectedLabel: ''
    }
  },
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    }
  },
  created () {
    this.$BUIEventHub.$on('handleOptionClick', this.handleOptionSelect)
  },
  beforeDestroy () {
    this.$BUIEventHub.$off('handleOptionClick', this.handleOptionSelect)
  },
  methods: {
    toggleMenu () {
      this.visible = !this.visible
    },
    handleClose () {
      this.visible = false
    },
    handleOptionSelect ({ option, byClick }) {
      this.$emit('input', option.value)
      this.selectedLabel = option.label
    }
  }
}
</script>

<style lang="stylus" scoped>
.b-select
  flex 1
  position relative
  display flex
  flex-direction row
  align-items center
  .icon-arrow
    position absolute
    right 10px
    color #b5b5b5
    pointer-events none
    transition transform 0.2s ease
    &.up
      transform rotate(-180deg)
.b-select__inner
  width 100%
  height 100%
  background-color #fff
  border 2px solid #e8ebed
  vertical-align middle
  cursor pointer
  &:hover
    border-color #c6d2e4
  &.active
    border-color #657c9e
  &::placeholder
    color #b5b5b5
</style>

