<template>
  <div id="app">
    <SphericalMovie/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import SphericalMovie from './components/SphericalMovie'


export default {
  name: 'app',
  components: {
    SphericalMovie
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
