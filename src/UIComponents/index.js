import Vue from 'vue'
// import './assets/styles/main.styl'
// import './assets/styles/main.css'
import CollapseTransition from './transitions/collapse-transition'
import BButtonGroup from './button-group/index.js'
import BButton from './button/index.js'
import BCard from './card/index.js'
import BCheckbox from './checkbox/index.js'
import BCheckboxGroup from './checkbox/src/CheckboxGroup.vue'
import BForm from './form/index.js'
import BFormItem from './form-item/index.js'
import BInput from './input/index.js'
import BModal from './modal/index.js'
import BOption from './option/index.js'
import BPanel from './panel/index.js'
import BSelect from './select/index.js'
import BSelectDropdown from './select/src/SelectDropdown'
import BUpload from './upload/index.js'
import BTable from './table/index.js'
import BTableColumn from './table/src/TableColumn'
import BTree from './tree/index.js'
import NavMenu from './nav-menu/index.js'
import MenuItem from './nav-menu/src/MenuItem'
import MessageBox from './message-box/index.js'
import BSubMenuItem from './nav-menu/src/SubMenuItem'
import { Message } from '../../node_modules/element-ui'
const components = [
  CollapseTransition,
  BButtonGroup,
  BButton,
  BCard,
  BCheckbox,
  BCheckboxGroup,
  BForm,
  BFormItem,
  BInput,
  BModal,
  BPanel,
  BOption,
  BSelect,
  BSelectDropdown,
  BUpload,
  BTable,
  BTableColumn,
  BTree,
  NavMenu,
  MenuItem,
  MessageBox,
  BSubMenuItem,
]

const install = function(Vue, opts = {}) {
  console.log('BUIOptions: ', opts)
  Vue.prototype.$BUIEventHub = Vue.prototype.$BUIEventHub || new Vue()
  components.map(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$msgbox = MessageBox
  Vue.prototype.$confirm = MessageBox.confirm
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
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
