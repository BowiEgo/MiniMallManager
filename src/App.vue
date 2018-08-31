<template>
  <div id="app">
    <nav-header></nav-header>
    <div class="wrap">
      <sidebar></sidebar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader'
import Sidebar from './components/Sidebar'

export default {
  name: 'app',
  components: {
    NavHeader,
    Sidebar
  }
}
</script>

<style>
@import './UIComponents/assets/styles/main.css';
@import './assets/styles/common.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  text-align: center;
  color: #2c3e50;
}
.wrap {
  /* height: 100%; */
  min-height: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
</style>

