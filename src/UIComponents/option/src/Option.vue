<template>
  <li
    class="b-select-dropdown__item"
    :class="{ right: children.length > 0 }"
    @click.stop="handleClick"
    @mouseover="handleMouseover"
    @mouseout="handleMouseout">
    <slot>
      <span>{{ label }}</span>
    </slot>
    <div class="child" v-if="children.length > 0 && showChildren">
      <b-option
        v-for="(item, index) in children"
        :key="index"
        :label="item[labelProxy]"
        :value="item[valueProxy]"
        :labelProxy="labelProxy"
        :valueProxy="valueProxy"
        :children="item.children">
      </b-option>
    </div>
  </li>
</template>

<script>
export default {
  name: 'BOption',
  data() {
    return {
      showChildren: false
    }
  },
  props: {
    value: {
      required: true
    },
    valueProxy: {
      type: String,
      default: 'value'
    },
    label: {
      type: String,
      default: '选项'
    },
    labelProxy: {
      type: String,
      default: 'label'
    },
    children: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    handleClick() {
      this.$BUIEventHub.$emit('handleOptionClick', { option: this, byClick: true })
    },
    handleMouseover() {
      this.showChildren = true
    },
    handleMouseout() {
      this.showChildren = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.b-select-dropdown__item
  position relative
  height 34px
  padding 0 20px
  line-height 34px
  font-size 14px
  white-space nowrap
  // overflow hidden
  text-overflow ellipsis
  color #606266
  cursor pointer
  text-align left
  &:hover
    background-color #f5f7fa
.child
  position absolute
  top -2px
  left 100%
  background-color #fff
  border 2px solid #e4e7ed
  box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
.right
  font-family FontAwesome
  &::after
    content "\F105"
    color #b5b5b5
    position absolute
    right 8px
</style>

