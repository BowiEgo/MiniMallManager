const getAllColumns = () => {

}

export default {
  name: 'BTableHeader',

  props: {
    store: {
      required: true
    }
  },

  render (h) {
    const columns = this.store.states._columns
    // const columnRows = convertToRows(columns, )

    return (
      <table
        style="width: 100%"
        class="el-table__header"
        cellspacing="0"
        cellpadding="0"
        border="0">
        <colgroup>
          {
            this._l(columns, column => 
              <col name={ column.id } width={ column.width ? column.width + 'px' : 'auto' }/>
            )
          }
        </colgroup>
        <thead>
          <tr>
            {
              this._l(columns, (item, index) => 
                <th
                  class="el-table__column"
                  colspan="1"
                  rowspan="1">
                  <div class="cell">{ item.label }</div>
                </th>
            )
            }
          </tr>
        </thead>
      </table>
    )
  }
}
