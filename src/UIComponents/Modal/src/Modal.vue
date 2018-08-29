<template>
  <transition name="fade">
    <div class="b-popup__wrapper"
      v-show="!isHide"
      @click.self="handleWrapperClick">
      <transition v-bind:name="transitionName">
        <div class="b-modal" v-show="visible">
          <div class="b-modal__header">
            <slot name="title">
              <span class="b-modal__title">{{ title }}</span>
            </slot>
            <i class="fa fa-times icon-close"
              aria-hidden="true"
              v-if="showClose"
              @click="handleClose">
            </i>
          </div>
          <div class="b-modal__body">
            <slot></slot>
          </div>
          <div class="b-modal__footer" v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import popup from '../../utils/mixins/popup'

export default {
  name: 'BModal',
  mixins: [ popup ],
  props: {
    title: String,
    showClose: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
      this.$emit('close')
    },
    handleWrapperClick () {
      this.handleClose()
    }
  }
}
</script>

<style lang="stylus" scoped>
.b-modal
  width 50%
  margin-top 15vh
  margin 15vh auto 15px
  background-color #fff
.b-modal__header
  display flex
  flex-direction row
  position relative
  padding 20px
  padding-bottom 10px
.b-modal__title
  font-size 18px
  color #303133
.b-modal__body
  padding 10px 20px 30px
.icon-close
  position absolute
  top 20px
  right 20px
  cursor pointer
</style>
