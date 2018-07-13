<template>
  <div class="nav-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NavMenu'
}
</script>

<style lang="stylus" scoped>
.nav-menu
  width 100%
</style>
