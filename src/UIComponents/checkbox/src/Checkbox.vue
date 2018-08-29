<template>
  <label class="b-checkbox">
    <span class="b-checkbox__input">
      <span class="b-checkbox__inner"></span>
      <input
        class="el-checkbox__original"
        type="checkbox"
        v-model="value">
    </span>
    <span class="b-checkbox__label"></span>
  </label>
</template>

<script>
export default {
  name: 'BCheckbox',
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.b-checkbox__inner
  width 14px
  height 14px
  background-color $highlight-color
</style>
