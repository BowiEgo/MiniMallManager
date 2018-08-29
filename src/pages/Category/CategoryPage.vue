<template>
  <div class="page">
    <div class="container">
      <h2>商品分类</h2>
      <b-tree
        width="80%"
        :item-height="'40px'"
        :data="categoryTree"
        :labelProxy="'name'"
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
      transition-name="fade-in-down"
      title="编辑分类"
      :visible.sync="editPanelVisible">
      <b-form>
        <b-form-item
          required
          :labelText="'类别名称'">
          <b-input
            v-model="editCateName"
            :placeholder="currentTreeData ? currentTreeData.name : '请输入类别名称'">
          </b-input>
        </b-form-item>
        <b-button-group>
          <b-button type="cancel" @click.native="editPanelVisible = false">取消</b-button>
          <b-button type="success" @click.native="editCate">提交</b-button>
        </b-button-group>
      </b-form>
    </b-modal>
    <b-modal
      transition-name="fade-in-down"
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
          <b-button type="success" @click.native="addCate">提交</b-button>
        </b-button-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { fetchCategory, addCategory, updateCategory, removeCategory } from '../../api'

export default {
  name: 'CategoryPage',
  data() {
    return {
      type: '',
      categoryTree: [],
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
    editCateName(val) {
      console.log('watch-editCateName', val)
    },
    editPanelVisible(val) {
      console.log('watch-editPanelVisible', val)
      if (!val) {
        this.currentTreeNode = null
        this.currentTreeData = null
        this.editCateName = ''
      }
    },
    addPanelVisible(val) {
      if (!val) {
        this.currentTreeNode = null
        this.currentTreeData = null
        this.addCateName = ''
        this.addCateId = ''
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetchCategory().then(res => {
      console.log('fetchCategory', res)
      this.categoryTree = res.data.data
    })
    },
    handleEditCate(node, data) {
      this.showEditPanel()
      this.currentTreeNode = node
      this.currentTreeData = data
    },
    editCate() {
      // this.currentTreeData.label = this.editCateName
      let params = {
        id: this.currentTreeData.id,
        name: this.editCateName
      }
      updateCategory(params).then(res => {
        console.log(res)
        if(res.data.success === true) {
          this.fetchData()
          this.hideEditPanel()
        } else {
          console.error(res.data.message)
        }
      })
    },
    handleAddCate(node, data) {
      this.showAddPanel()
      this.currentTreeNode = node
      this.currentTreeData = data
      console.log('currentTreeData', this.currentTreeData)
    },
    addCate() {
      let newChild = {
        id: this.addCateId,
        parentId: this.currentTreeData.id,
        name: this.addCateName
      }
      addCategory(newChild).then(res => {
        if(res.data.success === true) {
          this.fetchData()
          this.hideAddPanel()
        } else {
          console.error(res.data.message)
        }
      })
    },
    handleRemoveCate(node, data) {
      this.$confirm('是否删除该分类?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        removeCategory({
          id: data.id
        }).then(res => {
          if(res.data.success === true) {
            this.fetchData()
          } else {
            let msg = ''
            res.data.message.map(item => {
              for(let key in item) {
                msg += `${key}: ${item[key]} `
              }
            })
            alert(msg)
          }
        })
      }).catch(() => {
        console.log('cancelRemoveCate')
      })
    },
    handleItemClick(node) {
      node.instance.handleExpand()
    },
    showEditPanel() {
      this.editPanelVisible = true
    },
    hideEditPanel() {
      this.editPanelVisible = false
    },
    showAddPanel() {
      this.addPanelVisible = true
    },
    hideAddPanel() {
      this.addPanelVisible = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
  min-height 100%
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
    user-select none
    // width 100%
  .action
    float right
    font-size 12px
    user-select none
    span
      margin 0 10px
      user-select none
      cursor pointer
      &:hover
        color #00bcd4
  .click-mask
    position absolute 
    width: 84%
    height 100%
    left -20px
    top 0
    right 0
    bottom 0
</style>

