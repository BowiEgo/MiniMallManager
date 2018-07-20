<template>
  <div class="b-tree-node"
    :class="{
      'is-expanded' : expanded
    }"
    v-show="node.visible"
    @click.stop="handleClick">
    <div class="b-tree-node__content"
      :style="{ paddingLeft: node.level * 20 + 'px'}">
      <i
        class="fa fa-caret-right icon-right"
        :class="{
          'transparent' : node.childNodes.length === 0,
          'is-expanded' : expanded
        }"
        aria-hidden="true"
        @click="handleExpandIconClick">
      </i>
      <!-- <input type="checkbox"> -->
      <node-content :node="node"></node-content>
    </div>
    <collapse-transition>
      <div class="b-tree-node_children" v-show="expanded">
        <b-tree-node
          v-for="child in node.childNodes"
          :key="child.uid"
          :node="child">
        </b-tree-node>
      </div>
    </collapse-transition>
  </div>
</template>

<script>
export default {
  name: 'BTreeNode',
  components: {
    NodeContent: {
      props: {
        node: {
          required: true
        }
      },
      render (h) {
        const parent = this.$parent
        const tree = parent.tree
        const node = this.node
        const { data, store } = node
        return (
          parent.renderContent ? parent.renderContent.call(parent._renderProxy, h, { _self: tree.$vnode.context, node, data, store })
          : tree.$scopedSlots.default
            ? tree.$scopedSlots.default({ node, data })
            : <span class="el-tree-node__label">{ node.label }</span>
        )
      }
    }
  },
  data () {
    return {
      expanded: false
    }
  },
  props: {
    node: {
      default () {
        return {}
      }
    },
    renderContent: Function
  },
  watch: {
    'node.expanded' (val) {
      this.$nextTick(() => this.expanded = val)
    }
  },
  created () {
    const parent = this.$parent
    if (parent.isTree) {
      this.tree = parent
    } else {
      this.tree = parent.tree
    }

    const tree = this.tree
    if (!tree) {
      console.warn('Can not find node\'s tree.')
    }

    // console.log('props', props)
    const props = tree.props || {}
    // const chilrenKey = props['children'] || 'children'

    if (this.node.expanded) {
      this.expanded = true
    }
  },
  methods: {
    handleClick () {
      const store = this.tree.store
      store.setCurrentNode(this.node)
      
      this.tree.store.expandOnNodeClick && this.handleExpandIconClick()
    },
    handleExpandIconClick () {
      if (this.expanded) {
        this.node.collapse()
      } else {
        this.node.expand()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.b-tree-node__content
  display flex
  flex-direction row
  height 26px
  cursor pointer
  &:hover
    background-color #d8dadc
.icon-right
  line-height 26px
  padding 0 10px
  transition transform 0.1s ease
  &.is-expanded
    transform rotate(45deg)
.transparent
  opacity 0
</style>
