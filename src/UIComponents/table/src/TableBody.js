export default {
  name: 'BTableBody',

  props: {
    store: {
      required: true
    }
  },

  computed: {
    table() {
      return this.$parent
    },
    data() {
      return this.store.states.data
    },
    columns() {
      return this.store.states._columns
    }
  },

  render (h) {
    return (
      <table
        style="width: 100%"
        class="b-table__body"
        cellspacing="0"
        cellpadding="0"
        border="0">
        <colgroup>
          {
            this._l(this.columns, column => 
              <col name={ column.id } width={ column.width ? column.width + 'px' : 'auto' }/>
            )
          }
        </colgroup>
        <tbody>
          {
            this._l(this.data, (row, index) => [
              <tr>
                {
                  this._l(this.columns, (column, cellIndex) => {
                    return (
                      <td
                        class="el-table__column"
                        rowspan="1"
                        colspan="1"
                        key="cellIndex">
                        {
                          column.renderCell.call(
                            this._renderProxy,
                            h,
                            {
                              row,
                              column,
                              index,
                              store: this.store,
                              _self: this.context || this.table.$vnode.context
                            }
                          )
                        }
                      </td>
                    )
                  })
                }
              </tr>
            ])
          }
        </tbody>
      </table>
    )
  }
}
