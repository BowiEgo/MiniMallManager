<template>
  <div class="b-table-column"></div>
</template>

<script>
import { getPropByPath } from '../../utils/utils'
let columnIdSeed = 1

const getDefaultColumn  = function (type, options) {
  const column = {}

  for (let name in options) {
    if (options.hasOwnProperty(name)) {
      column[name] = options[name]
    }
  }

  return column
}

const DEFAULT_RENDER_CELL = function(h, { row, column, index }) {
  const property = column.property
  const value = property && getPropByPath(row, property).v
  if (column && column.formatter) {
    return column.formatter(row, column, value, index)
  }
  if (property === 'pic') {
    return (
      <div class="b-table__column-img">
        <img src={value}></img>
      </div>
    )
  }
  return value
}


export default {
  name: 'BTableColumn',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    property: String,
    prop: String,
    label: String,
    width: {}
  },
  computed: {
    owner() {
      let parent = this.$parent
      while (parent && !parent.tableId) {
        parent = parent.$parent
      }
      return parent
    },
    columnOrTableParent() {
      let parent = this.$parent
      while (parent && !parent.tableId && !parent.columnId) {
        parent = parent.$parent
      }
      return parent
    }
  },
  created() {
    const type = this.type
    const parent = this.columnOrTableParent

    this.columnId = (parent.tableId || parent.columnId) + '_column_' + columnIdSeed++

    let column = getDefaultColumn(type, {
      id: this.columnId,
      label: this.label,
      property: this.prop || this.property,
      width: this.width,
      renderCell: null
    })
    column.renderCell = function(h, data) {
      let renderCell = DEFAULT_RENDER_CELL
      return <div class="cell">{ renderCell(h, data) }</div>
    }
    this.columnConfig = column

  },
  mounted() {
    const owner = this.owner
    const parent = this.columnOrTableParent
    const columnIndex = [].indexOf.call(parent.$refs.hiddenColumns.children, this.$el)

    owner.store.commit('insertColumn', this.columnConfig, columnIndex, parent)
  }
}
</script>

<style lang="stylus" scoped>

</style>
