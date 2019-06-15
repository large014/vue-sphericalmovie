<template>
  <div id="app">
    <SphericalMovie ref="movie" :movieSrc="'video/test2.mp4'" :movieList=movies :loadimgSrc="'loading/loading.gif'" />
    <div id="mockUI">
      <a href="#" id="navi-next" @click="next">
        <i class="material-icons">navigate_next</i>
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
          "video/test2.mp4",
          "video/test3.mp4",
          "video/test1.mp4"
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
#mockUI {
  position: absolute;
  top: 15px; left: 10px;
}

a{
    display: inline-block;
    width: 60px;
    height: 60px;
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
    font-size: 24px;
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
