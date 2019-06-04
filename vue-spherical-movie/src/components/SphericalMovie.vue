<template>
  <div class="sphericalMovie">
      <!-- <video id="video" src="video/test2.mp4" muted autoplay loop webkit-playsinline="" style="display:none"></video> -->
      <div class="loader">
        <img :src="loadimgSrc" alt="" class="loadimg">
      </div>
      <video id="video" :src=moviePath muted autoplay loop playsinline style="display:none"></video>
      <canvas ref="canvas"></canvas>
  </div>
</template>

<script>

import SphericalMovie from '@/assets/js/SphericalMovie.js'


export default {
  name: 'sphericalMovie',
  data() {
    return{
      test : null,
      width:0,
      height:0,
      moviePath:this.movieSrc,
      // loadImgPath : this.loadimgSrc
    }
  },
  created(){
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
    this.test =  new SphericalMovie( this.$refs.canvas );
    console.log('movieData = ' + this.movieSrc);
  },
  props: {
    movieSrc : String,
    loadimgSrc : String,
    movieList: Array,
  },
  computed:{
  },
  methods: {
    onResize() {
      // this.width = this.$el.clientWidth
      // this.height = this.$el.clientHeight


      console.log('w = ' + this.width + ',h = ' + this.height);
      // console.log(this.$el);
      // this.c amera.aspect = this.width / this.height
      // this.camera.updateProjectionMatrix()
      // this.renderer.setSize( this.width, this.height)
    },
    next(){
      console.log('next test');
      // this.moviePath = "video/test1.mp4";
      this.moviePath = this.movieList[2];
      this.test.videoPlay();
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .sphericalMovie{
    width: 100%;
    height: 100vh;
  }
  .loader{
    width: 100%;
    height: 100%;
    background-color: #FFF;
    position: relative;
    transition: opacity .3s ease;
    &.hide{
      opacity: 0;
    }
  }
  .loadimg{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  canvas{
    width: 100%;
    height: 100%;
  }
</style>
