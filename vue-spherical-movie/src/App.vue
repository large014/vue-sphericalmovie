<template>
  <div id="app">
    <!-- <SphericalMovie :moviePath="video/test2.mp4"/> -->
    <SphericalMovie ref="movie" :movieSrc="'video/test2.mp4'" :movieList=movies :loadimgSrc="'loading/loading.gif'" />
    <div id="ui">
      <a href="#" @click="next" id="navi-next">
        <i class="material-icons">navigate_next</i>
      </a>
      <a href="#" id="take-photo">
        <i class="material-icons">photo_camera</i>
      </a>
      <a href="#" id="download-photo">
        <i class="material-icons">file_download</i>
      </a>
    </div>
  </div>
</template>

<script>
import SphericalMovie from './components/SphericalMovie'


export default {
  name: 'app',
  data() {
    return{
      movies : [
          "video/test1.mp4",
          "video/test2.mp4",
          "video/test3.mp4"
        ],
    }
  },
  components: {
    SphericalMovie
  },

  methods: {
    next() {
      this.$refs.movie.next()
    }
  }


}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#ui {
  position: absolute;
  bottom: 0; left: 50%;
  transform: translate(-50%, 0);
  background-color: #ccc;
  padding: 20px 20px;
}
button{
  font-size: 70px;
}

a{
    display: inline-block;
    width: 120px;
    height: 120px;
    background-color: #ffffff;
    line-height: 100%;
    color: #303030;
    margin: 10px 3px;
    border-radius: 50%;
    position: relative;
}

.material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 60px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
}

i{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}


</style>
