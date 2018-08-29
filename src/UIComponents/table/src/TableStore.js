export default class TableStore {
  constructor(table, initialState = {}) {
    if (!table) {
      throw new Error('Table is required.');
    }

    this.table = table

    this.states = {
      _columns: [],
      columns: [],
      data: null,
      filters: {}
    }
    for (let prop in initialState) {
      if (initialState.hasOwnProperty(prop) && this.states.hasOwnProperty(prop)) {
        this.states[prop] = initialState[prop]
      }
    }
  }

  mutations = {
    setData(states, data) {
      states.data = data
    },

    insertColumn(states, column, index, parent) {
      let array = states._columns

      array.push(column)
    }
  }

  commit(name, ...args) {
    const mutations = this.mutations
    if (mutations[name]) {
      mutations[name].apply(this, [this.states].concat(args))
    } else {
      throw new Error(`Action not found: ${name}`)
    }
  }

  updateColumns() {
    const states = this.states
    const _columns = states._columns || []

    states.columns = [].concat(_columns)
  }
}
