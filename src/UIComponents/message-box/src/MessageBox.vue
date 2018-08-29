<template>
  <transition name="fade">
    <div class="b-popup__wrapper"
      v-show="!isHide"
      @click.self="handleWrapperClick">
      <transition v-bind:name="transitionName">
        <div class="b-message-box" v-show="visible">
          <div class="b-message-box__header">
            <div class="b-message-box__title">{{ title }}</div>
            <i class="fa fa-times icon-close"
              aria-hidden="true"
              v-if="showClose"
              @click="handleAction('cancel')">
            </i>
          </div>
          <div class="b-message-box__content">
            <div class="b-message-box__message">{{ message }}</div>
          </div>
          <div class="b-message-box__btns">
            <b-button type="cancel" @click.native="handleAction('cancel')">取消</b-button>
            <b-button type="success" @click.native="handleAction('confirm')">提交</b-button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import popup from '../../utils/mixins/popup'

export default {
  name: 'BMessageBox',
  mixins: [ popup ],
  data () {
    return {
      callback: null
    }
  },
  props: {
    title: String,
    message: String,
    showClose: {
      type: Boolean,
      default: true
    },
  },
  methods: {
    doClose() {
      this.visible = false
    },
    handleAction (action) {
      if (action === 'confirm') {
        console.log('confirm')
        this.doClose()
        this.callback(this.action, this)
        return
      }
      if (action === 'cancel') {
        this.doClose()
      }
    },
    handleWrapperClick () {
      this.handleAction('cancel')
    }
  }
}
</script>

<style lang="stylus" scoped>
.b-message-box
  position relative
  width 420px
  margin 35vh auto 15px
  background-color #fff
  box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
  overflow hidden
.b-message-box__header
  padding 15px
  padding-bottom 10px
.b-message-box__title
  font-size 18px
.b-message-box__content
  padding 10px 15px
  color #606266
  font-size 14px
.b-message-box__btns
  padding 5px 15px 10px
  text-align right
.icon-close
  position absolute
  top 20px
  right 20px
  cursor pointer
</style>
