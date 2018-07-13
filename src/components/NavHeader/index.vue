<template>
  <div id="header">
    <div class="brand">
      <i class="fa fa-cubes" aria-hidden="true"></i>
      <span>MINI</span>
      MALL
    </div>
    <ul class="nav nav-left">
      <li class="toggle-navigation">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </li>
      <li class="toggle-profile">
        <i class="fa fa-user-o" aria-hidden="true"></i>
      </li>
      <li class="search">
        <input type="text" class="input round" placeholder="搜索">
        <button type="submit" class="btn btn-search">
          <i class="fa fa-search" aria-hidden="true"></i> 
        </button>
      </li>
    </ul>
    <ul class="nav nav-right">
      <li class="profile">
        <img src="../../assets/images/profile.jpg" class="avatar round-all" alt="">
        <span class="name">管理员名字</span>
      </li>
      <li class="toggle-fullscreen" @click="toggleFull">
        <i class="fa fa-expand" aria-hidden="true" v-if="!isFull"></i>
        <i class="fa fa-compress" aria-hidden="true" v-else></i>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  removeFullScreenChange,
  fullScreenChange,
  fullScreen,
  fullExit
} from '../../utils/bom'

export default {
  name: 'NavHeader',
  data () {
    return {
      isFull: false
    }
  },
  created () {
    fullScreenChange((state) => {
      this.isFull = state
    })
  },
  destroyed () {
    removeFullScreenChange()
  },
  methods: {
    toggleFull () {
      if (!this.isFull) {
        fullScreen(document.getElementById('app'))
        this.isFull = true
      } else {
        fullExit()
        this.isFull = false
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
#header
  width 100%
  height 60px
  background #fff
  display flex
  align-items center
  .brand
    width 240px
    height 100%
    line-height 60px
    float left
    font-weight 400
    text-align left
    padding-left 20px
    font-size 20px
    span
      font-weight 800
    img
      display block
      height 100%
  .nav
    height 100%
    display flex
    align-items center
    .toggle-navigation, .toggle-profile, .toggle-fullscreen
      width 60px
      height 60px
      display flex
      align-items center
      justify-content center
      font-size 20px
      transition all 0.2s ease
      cursor pointer
      &:hover
        background-color #f4f7f7
    .search
      height 30px
      position relative
      margin-left 40px
      input
        background-color #EDF1F2
      .btn-search
        background-color inherit
        position absolute
        right 10px
        top 50%
        transform translateY(-50%)
    .profile
      display flex
      align-items center
      .avatar
        width: 32px
        height: 32px
      .name
        font-size 1vw
        font-weight 600
        padding 0 5px
  .nav-left
    float left
  .nav-right
    float right
    margin-left auto
</style>

