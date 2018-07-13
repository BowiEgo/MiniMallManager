import Vue from 'vue'
import './styles/common.styl'
import CollapseTransition from './transitions/collapse-transition'
import BButtonGroup from './ButtonGroup'
import BButton from './Button'
import BForm from './Form'
import BFormItem from './Form/FormItem'
import BInput from './Input'
import BOption from './Option'
import BSelect from './Select/index.js'
import BUpload from './Upload/index.js'
import NavMenu from './NavMenu/index.js'
import MenuItem from './NavMenu/src/MenuItem'
import BSubMenuItem from './NavMenu/src/SubMenuItem'

const components = [
  CollapseTransition,
  BButtonGroup,
  BButton,
  BForm,
  BFormItem,
  BInput,
  BOption,
  BSelect,
  BUpload,
  NavMenu,
  MenuItem,
  BSubMenuItem,
]

const install = function(Vue, opts = {}) {
  console.log('BUIOptions: ', opts)
  Vue.prototype.$BUIEventHub = Vue.prototype.$BUIEventHub || new Vue()
  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// module.exports = {
//   version: '0.1.0',
//   install,
//   NavMenu,
//   MenuItem
// }

// module.exports.default = module.exports

export default {
  version: '0.1.0',
  install,
  NavMenu,
  MenuItem
}
