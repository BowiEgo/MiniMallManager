import ButtonGroup from './src/ButtonGroup'

/* istanbul ignore next */
ButtonGroup.install = function(Vue) {
  Vue.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup