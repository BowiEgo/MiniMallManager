<template>
  <div class="sidebar">
    <nav>
      <h5 class="sidebar-header">Navigation</h5>
      <nav-menu>
        <menu-item
          v-for="(item, index) in menu"
          :key="index"
          :title="item.text"
          :right="item.children && item.children.length > 0"
          @open="handleOpen(index)"
          @goRouter="handleGoRouter(item, index)"
          :isOpened="openedMenu === index"
          :active="activeMenu[0] === index"
          :path="item.path">
          <b-sub-menu-item
            v-if="item.children"
            v-for="(subItem, subItemIndex) in item.children"
            :key="subItemIndex"
            :text="subItem.text"
            :active="index === activeMenu[0] && subItemIndex === activeMenu[1]"
            @click="goRouter(subItem.path, index, subItemIndex)">
          </b-sub-menu-item>
        </menu-item>
      </nav-menu>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      menu: [
        {
          text: '数据统计',
          path: '/'
        },
        {
          text: '商品',
          children: [
            {
              text: '类别',
              path: '/category'
            },
            {
              text: '品牌',
              path: '#'
            },
            {
              text: '规格',
              path: '#'
            },
            {
              text: '发布商品',
              path: '/goods/add'
            }
          ]
        },
        {
          text: '订单',
          children: [
            {
              text: '订单列表',
              path: '#'
            },
            {
              text: '添加订单',
              path: '#'
            },
            {
              text: '缺货登记',
              path: '#'
            }
          ]
        },
        {
          text: '优惠',
          children: [
            {
              text: '栏目1',
              path: '#'
            },
            {
              text: '栏目2',
              path: '#'
            },
            {
              text: '栏目3',
              path: '#'
            }
          ]
        },
        {
          text: '评论',
          children: [
            {
              text: '栏目1',
              path: '#'
            },
            {
              text: '栏目2',
              path: '#'
            },
            {
              text: '栏目3',
              path: '#'
            }
          ]
        },
        {
          text: '会员',
          children: [
            {
              text: '会员列表',
              path: '#'
            },
            {
              text: '会员管理',
              path: '#'
            },
            {
              text: '会员等级',
              path: '#'
            }
          ]
        }
      ],
      openedMenu: -1,
      activeMenu: [-1, -1]
    }
  },
  methods: {
    handleOpen (index) {
      this.openedMenu = index
    },
    handleGoRouter (item, index) {
      this.openedMenu = false
      this.goRouter(item.path, index, -1)
    },
    goRouter (path, index, subItemIndex) {
      this.activeMenu = [index, subItemIndex]
      this.$router.push({ path: path })
    }
  }
}
</script>

<style lang="stylus" scoped>
.sidebar
  width 240px
  // position absolute
  background-color #1d212a
.sidebar-header
  margin 0
  padding 10px 10px 5px
  color #6F737E
  font-size 0.8vw
  font-weight 600
  line-height 20px
  text-align left
  text-transform uppercase
</style>

