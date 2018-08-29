import NavMenu from './src/NavMenu'

/* istanbul ignore next */
NavMenu.install = function(Vue) {
  Vue.component(NavMenu.name, NavMenu)
}

export default NavMenu