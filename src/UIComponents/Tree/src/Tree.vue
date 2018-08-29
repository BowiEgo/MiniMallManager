<template>
  <div class="b-tree" role="tree" :style="computedStyle">
    <b-tree-node
      v-for="child in root.childNodes"
      :key="child.uid"
      :node="child"
      :render-content="renderContent">
    </b-tree-node>
  </div>
</template>

<script>
import BTreeNode from './TreeNode'
import TreeStore from './TreeStore'

export default {
  name: 'BTree',
  data () {
    return {
      root: null
    }
  },
  components: {
    BTreeNode
  },
  props: {
    styles: {
      type: Object,
      default: () => ({})
    },
    width: String,
    itemHeight: String,
    data: Array,
    labelProxy: String,
    defaultExpandAll: Boolean,
    preventDefaultClick: {
      type: Boolean,
      default: false
    },
    expandOnClickNode: {
      type: Boolean,
      default: false
    },
    renderContent: Function,
    props: {
      default () {
        return {
          children: 'children',
          label: 'label',
          icon: 'icon',
          disabled: 'disabled'
        }
      }
    }
  },
  computed: {
    computedStyle () {
      return Object.assign(this.styles, {
        width: this.width
      })
    },
    children: {
      set (val) {
        this.data = val
      },
      get () {
        return this.data
      }
    }
  },
  watch: {
    data: {
      handler: function (newVal) {
        this.store.setData(newVal)
      },
      deep: true
    },
    // data (newVal) {
    //   console.log('tree-watch-data', newVal)
    //   this.store.setData(newVal)
    // }
  },
  created () {
    this.isTree = true

    this.store = new TreeStore({
      data: this.data,
      props: this.props,
      labelProxy: this.labelProxy,
      expandOnClickNode: this.expandOnClickNode,
      defaultExpandAll: this.defaultExpandAll,
      itemHeight: this.itemHeight
      // currentNode: this.currentNode
    })

    this.root = this.store.root
  }
}
</script>

<style lang="stylus" scoped>
.b-tree
  margin 0 auto
</style>
