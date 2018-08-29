<template>
  <div class="b-panel">
    <div class="b-panel__head">
      <h3>{{ title }}</h3>
      <div class="actions">
        <i :class="[isFull ? 'fa fa-compress' : 'fa fa-expand']" @click="handelFullpage"></i>
        <i :class="[isOpen ? 'fa fa-chevron-down' : 'fa fa-chevron-up']" @click="handleOpen"></i>
        <i class="fa fa-times"></i>
      </div>
    </div>
    <div class="b-panel__body">
      <collapse-transition>
        <div v-show="isOpen">
          <slot></slot>
        </div>
      </collapse-transition>
    </div>
  </div>
</template>

<script>
import {
  // removeFullScreenChange,
  fullScreenChange,
  fullScreen,
  fullExit
} from '../../../utils/bom'

export default {
  name: 'BPanel',

  data() {
    return {
      isFull: false,
      isOpen: true
    }
  },

  props: {
    title: String
  },

  created() {
    fullScreenChange((state) => {
      this.isFull = state
    })
  },

  methods: {
    handelFullpage() {
      if (!this.isFull) {
        fullScreen(this.$el)
      } else {
        fullExit()
      }
    },
    handleOpen() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="stylus" scoped>
.b-panel
  background-color #fff
  box-shadow 0 1px 1px rgba(0,0,0,.05)
.b-panel__head
  display flex
  flex-direction row
  justify-content space-between
  padding 10px
  border-bottom 1px solid #ebeef5
  color #909aa0
  h3
    font-weight 300
    font-size 16px
  .actions
    i
      margin 0 6px
      cursor pointer
.b-panel__body
  padding 0 30px
</style>

