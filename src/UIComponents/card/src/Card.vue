<template>
  <div class="b-card">
    <div class="b-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="b-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BCard',
  props: {
    header: {},
    bodyStyle: {}
  }
}
</script>

<style lang="stylus" scoped>
.b-card
  background-color #fff
  box-shadow 1px 0px 20px rgba(0, 0, 0, 0.05)
  padding 20px
  margin-bottom 20px
</style>
