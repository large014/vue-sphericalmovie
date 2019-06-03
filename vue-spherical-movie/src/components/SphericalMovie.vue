<template>
  <div class="sphericalMovie">
      <canvas ref="canvas" :width="width" :height="height"></canvas>
  </div>
</template>

<script>

import SphericalMovie from '@/assets/js/SphericalMovie.js'


export default {
  name: 'sphericalMovie',
  data() {
    return{
      width:0,
      height:0,
    }
  },
  created(){
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
    let test =  new SphericalMovie( this.$refs.canvas );
  },
  props: {
    msg: String
  },
  computed:{
  },
  methods: {
    onResize() {
      // this.width = this.$el.clientWidth
      // this.height = this.$el.clientHeight


      // console.log('w = ' + this.width + ',h = ' + this.height);
      // console.log(this.$el);
      // this.camera.aspect = this.width / this.height
      // this.camera.updateProjectionMatrix()
      // this.renderer.setSize( this.width, this.height)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sphericalMovie{
    width: 100%;
    height: 100vh;
  }
</style>
