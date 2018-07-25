<template>
  <div class="page">
    <div class="wrap">
      <b-tree
        width="80%"
        :item-height="'40px'"
        :data="allTypesClone"
        :expand-on-click-node="false"
        :prevent-default-click="true"
        default-expand-all
        ref="tree">
        <div class="b-custom-tree-node" slot-scope="{ node, data }">
          <div class="label">{{ node.label }}</div>
          <div class="action">
            <span @click="handleRemoveCate(node, data)">删除</span>
            <span @click="handleEditCate(node, data)">编辑</span>
            <span @click="handleAddCate(node, data)">添加</span>
            <!-- <b-button type="cancel">删除</b-button> -->
            <!-- <b-button type="primary">编辑</b-button> -->
          </div>
          <div class="click-mask" @click="handleItemClick(node)"></div>
        </div>
      </b-tree>
    </div>
    <b-modal
      transitionName="bounce-in"
      title="编辑分类"
      :visible.sync="editPanelVisible">
      <b-form>
        <b-form-item
          required
          :labelText="'类别名称'">
          <b-input
            v-model="editCateName"
            :placeholder="currentTreeData ? currentTreeData.label : '请输入类别名称'">
          </b-input>
        </b-form-item>
        <b-button-group>
          <b-button type="cancel" @click.native="editPanelVisible = false">取消</b-button>
          <b-button type="primary" @click.native="editCate">提交</b-button>
        </b-button-group>
      </b-form>
    </b-modal>
    <b-modal
      transition-name="bounce-in"
      title="添加分类"
      :visible.sync="addPanelVisible">
      <b-form>
        <b-form-item
          required
          :labelText="'类别名称'">
          <b-input
            v-model="addCateName"
            placeholder="请输入类别名称">
          </b-input>
        </b-form-item>
        <b-form-item
          required
          :labelText="'类别id'">
          <b-input
            v-model="addCateId"
            placeholder="请输入类别id">
          </b-input>
        </b-form-item>
        <b-button-group>
          <b-button type="cancel" @click.native="editPanelVisible = false">取消</b-button>
          <b-button type="primary" @click.native="addCate">提交</b-button>
        </b-button-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'CategoryPage',
  data () {
    const allTypes = [
      {
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }
    ]
    return {
      type: '',
      types: [
        { value: '0', label: '水'},
        { value: '1', label: '火'},
        { value: '2', label: '吐'}
      ],
      allTypesClone: JSON.parse(JSON.stringify(allTypes)),
      currentTreeNode: null,
      currentTreeData: null,
      editPanelVisible: false,
      addPanelVisible: false,
      addCateName: '',
      addCateId: '',
      editCateName: ''
    }
  },
  watch: {
    editCateName (val) {
      console.log('watch-editCateName', val)
    },
    editPanelVisible (val) {
      console.log('watch-editPanelVisible', val)
      if (!val) {
        this.currentTreeNode = null
        this.currentTreeData = null
        this.editCateName = ''
      }
    },
    addPanelVisible (val) {
      if (!val) {
        this.currentTreeNode = null
        this.currentTreeData = null
        this.addCateName = ''
        this.addCateId = ''
      }
    }
  },
  methods: {
    handleEditCate (node, data) {
      this.showEditPanel()
      this.currentTreeNode = node
      this.currentTreeData = data
    },
    editCate () {
      this.currentTreeData.label = this.editCateName
      this.hideEditPanel()
    },
    handleAddCate (node, data) {
      this.showAddPanel()
      this.currentTreeNode = node
      this.currentTreeData = data
    },
    addCate () {
      let newChild = {
        id: this.addCateId,
        label: this.addCateName
      }
      if (!this.currentTreeData.children) {
        this.$set(this.currentTreeData, 'children', [])
      }
      this.currentTreeData.children.push(newChild)
      this.hideAddPanel()
    },
    handleRemoveCate (node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },
    handleItemClick (node) {
      node.instance.handleExpand()
    },
    showEditPanel () {
      this.editPanelVisible = true
    },
    hideEditPanel () {
      this.editPanelVisible = false
    },
    showAddPanel () {
      this.addPanelVisible = true
    },
    hideAddPanel () {
      this.addPanelVisible = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrap
  width 100%
  background-color #fff
  padding 20px 0
.b-custom-tree-node
  position relative
  width 100%
  padding-right 20px
  display flex
  flex-direction row
  line-height 40px
  justify-content space-between
  .label
    // width 100%
  .action
    float right
  .click-mask
    position absolute 
    width: 84%
    height 100%
    left -20px
    top 0
    right 0
    bottom 0
</style>

