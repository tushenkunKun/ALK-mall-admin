<template>
  <div class="layout">
    <el-container v-if="state.showMenu" class="container">
      123
    </el-container>
    <el-container v-else class="container"></el-container>
  </div>
  <router-view />
</template>

<script>
import { reactive } from '@vue/reactivity';
export default {
  name:'App',
  setup() {
    console.log('App');
    const state = reactive({
      showMenu:true
    })
    return {state}
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.layout {
  min-height: 100vh;
  background-color: #ffffff;
}
.container {
  height: 100vh;
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
