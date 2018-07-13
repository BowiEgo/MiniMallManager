<template>
  <transition-group name="zoom-out-up" tag="ul" class="b-upload-list">
    <li class="b-upload-list__item"
      v-for="(file, index) in files"
      :key="file.uid">
      <div class="b-upload-list__item-thumbnail">
        <img :src="file.url" alt="">
        <div class="b-upload-list__item-mask">
          <div class="b-upload-list__item-close" @click="handleRemove(file, index)">
            <i class="fa fa-times icon-close" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div class="flex row space-between">
        <div class="b-upload-list__item-size">
          {{ file.size }} kb
        </div>
        <div class="b-upload-list__item-type">
          {{ file.type }}
        </div>
      </div>
      <div class="b-upload-list__item-name">
        {{ file.name }}
      </div>
    </li>
  </transition-group>
</template>

<script>
export default {
  name: 'BUploadList',
  props: {
    files: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    handleRemove (file) {
      this.$emit('remove', file)
    }
  }
}
</script>

<style lang="stylus" scoped>
.b-upload-list
  // display flex
  // flex-direction row
  // flex-wrap wrap
  padding 10px 0 0 0
.b-upload-list__item
  display inline-block
  width 200px
  margin 0 20px 20px 0
  padding 10px
  box-shadow 0 2px 4px rgba(0, 0, 0, .05)
  &:hover
    .b-upload-list__item-mask
     opacity 1
.b-upload-list__item-thumbnail
  position relative
  width 180px
  height 180px
  img
   width 100%
   height 100%
.b-upload-list__item-mask
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  background-color rgba(0, 0, 0, 0.3)
  transition opacity 0.2s ease
  opacity 1
  &:after
    content ''
.b-upload-list__item-close
  position absolute
  right 0
  top 0
  width 0
  height 0
  border-top 40px solid rgba(222, 105, 121, 0.6)
  border-left 40px solid transparent
  cursor pointer
  .icon-close
    position absolute
    top -36px
    right 4px
    color #fff
.b-upload-list__item-name
  width 100%
  padding 0 10px
  font-size 12px
  line-height 14px
  word-break break-all
  overflow hidden
.b-upload-list__item-size, .b-upload-list__item-type
  display inline
  padding 2px 10px
  font-size 12px
  font-weight 800
  line-height 14px
  word-break break-all
  overflow hidden
</style>
