<template>
  <div class="b-tree" role="tree">
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
    data: Array,
    defaultExpandAll: Boolean,
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
        console.log('tree-watch-data', newVal)
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
      defaultExpandAll: this.defaultExpandAll
      // currentNode: this.currentNode
    })

    this.root = this.store.root
    console.log('tree-root', this.root)
  }
}
</script>

<style lang="stylus" scoped>

</style>

