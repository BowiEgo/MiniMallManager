<template>
  <div class="page">
    <b-tree
      :data="allTypesClone"
      :expand-on-click-node="false"
      default-expand-all>
      <div class="b-custom-tree-node" slot-scope="{ node, data }">
        <div class="label">{{ node.label }}</div>
        <div class="action">
          <span @click="removeCate(node, data)">删除</span>
          <span @click="showEditPanel">编辑</span>
          <span @click="showAddPanel">添加</span>
          <!-- <b-button type="cancel">删除</b-button> -->
          <!-- <b-button type="primary">编辑</b-button> -->
        </div>
      </div>
    </b-tree>
    <b-modal
      transitionName="bounce-in"
      title="编辑分类"
      :visible.sync="editPanelVisible">
      <b-form>
        <b-form-item
          required
          :labelText="'类别名称'">
          <b-input
            placeholder="请在此输入类别名称">
          </b-input>
        </b-form-item>
        <b-button-group>
          <b-button type="cancel" @click.native="editPanelVisible = false">取消</b-button>
          <b-button type="primary" @click.native="editPanelVisible = false">提交</b-button>
        </b-button-group>
      </b-form>
    </b-modal>
    <b-modal
      transitionName="bounce-in"
      title="添加分类"
      :visible.sync="addPanelVisible">
      <b-form>
        <b-form-item
          required
          :labelText="'类别名称'">
          <b-input
            placeholder="请在此输入类别名称">
          </b-input>
        </b-form-item>
        <b-button-group>
          <b-button type="cancel" @click.native="editPanelVisible = false">取消</b-button>
          <b-button type="primary" @click.native="editPanelVisible = false">提交</b-button>
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
      editPanelVisible: false,
      addPanelVisible: false
    }
  },
  methods: {
    removeCate (node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },
    showEditPanel () {
      this.editPanelVisible = true
    },
    showAddPanel () {
      this.addPanelVisible = true
    },
  }
}
</script>

<style lang="stylus" scoped>
.b-custom-tree-node
  width 100%
  display flex
  flex-direction row
  line-height 26px
  justify-content space-between
  .label
    // width 100%
  .action
    float right
</style>

