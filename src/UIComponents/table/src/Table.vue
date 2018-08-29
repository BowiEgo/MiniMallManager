<template>
  <div class="b-table">
    <div class="hidden-columns" ref="hiddenColumns"><slot></slot></div>
    <div
      v-if="showHeader"
      class="b-table__header-wrapper">
      <table-header 
        :store="store">
      </table-header>
    </div>
    <table-body
      :store="store">
    </table-body>
  </div>
</template>

<script>
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableStore from './TableStore'

let tableIdSeed = 1

export default {
  name: 'BTable',

  components: {
    TableHeader,
    TableBody,
  },

  data() {
    const store = new TableStore(this, {
    })
    return {
      store
    }
  },

  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    showHeader: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    data: {
      immediate: true,
      handler: function(val) {
        this.store.commit('setData', val)
      }
    }
  },

  created() {
    this.tableId = 'b-table_' + tableIdSeed++
  },

  mounted() {
    this.store.updateColumns()
  }
}
</script>

<style lang="stylus" scoped>
.b-table
  width 100%
  padding 10px 0
</style>
