# vue-spherical-movie
ブラウザで360度動画再生させながら、任意のタイミングでキャプチャするコンポーネント  
[DEMO](https://large014.github.io/vue-sphericalmovie/)  
## Install
```
./src/components/CaptureUI.vue.vue をコピー
./src/components/SphericalMovie.vue をコピー
```

### Usage
```


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

<template>
  <div id="app">
    <SphericalMovie ref="movie" :movieList=movies :loadimgSrc="'loading/loading.gif'" />
  </div>
</template>
```
プロパティ  
[movieList] : 再生させる360動画のパス  
[loadimgSrc] : 動画読み込み中に表示させるloadingパーツのパス


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
