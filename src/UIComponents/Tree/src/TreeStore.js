import Node from './Node'

export default class TreeStore {
  constructor (options) {
    this.currentNode = null
    this.currentNodeKey = null

    for (let name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name]
      }
    }

    this.nodeMap = {}
    this.root = new Node({
      data: this.data,
      store: this
    })
  }

  setData (newVal) {
    console.log(newVal, this.root.data)
    console.log(newVal !== this.root.data)
    this.root.setData(newVal)
  }

  setCurrentNode (node) {
    this.currentNode = node
  }
}