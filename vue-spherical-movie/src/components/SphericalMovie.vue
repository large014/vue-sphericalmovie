<template>
  <div class="sphericalMovie">
        <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>

import SphericalMovie from '@/assets/js/SphericalMovie.js'


export default {
  name: 'sphericalMovie',
  // data() {
  // },
  created(){
  },
  mounted() {
    let test =  new SphericalMovie();
  },
  props: {
    msg: String
  },
  computed:{
  },
  methods: {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
