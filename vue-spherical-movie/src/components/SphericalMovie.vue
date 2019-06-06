<template>
  <div class="sphericalMovie">
      <CaptureUI id="captureui" ref="captureui" @ui-event="onClick($event)" />
      <div class="loader" :class="{hide:isloaded}">
        <img :src="loadimgSrc" alt="" class="loadimg">
      </div>
      <video id="video" ref="video" :src=moviePath muted autoplay loop playsinline style="display:none"></video>
      <canvas ref="canvas"></canvas>
  </div>
</template>

<script>

import OrbitControls from '@/assets/js/libs/OrbitControls'
import CaptureUI from '../components/CaptureUI'

export default {
  name: 'sphericalMovie',
  data() {
    return{
      test : null,
      width:0,
      height:0,
      moviePath:this.movieList[0],
      isloaded:false,
      requestId: undefined,
      scene: new THREE.Scene(),
      camera: new THREE.PerspectiveCamera(),
      container: new THREE.Object3D(),
      spheres: [],
      currentMovieIndex: 0,
    }
  },
  components: {
    CaptureUI
  },
  created(){
  },
  mounted() {

    this.scene.add(this.container)

    //--- mesh
    this.geometry = new THREE.SphereGeometry(5, 60, 40);
    this.geometry.scale(- 1, 1, 1);

    //--- Movie
    this.video = document.getElementById('video');
    this.video.play();
    this.video.addEventListener("loadeddata", () => {
        console.log('video complete!');
        this.isloaded = true;
    });

    //--- Texture
    this.texture = new THREE.VideoTexture(this.video);
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.magFilter = THREE.LinearFilter;
    this.texture.format = THREE.RGBFormat;

    //--- Material
    this.material = new THREE.MeshBasicMaterial({ map: this.texture });

    this.sphere = new THREE.Mesh( this.geometry, this.material );
    this.container.add(this.sphere);

    //--- camera
    this.camera.position.set(0,0,1.0)
    this.camera.lookAt(this.container.position)

    //--- render
    this.renderer = new THREE.WebGLRenderer({
      canvas:this.$canvas,
      preserveDrawingBuffer: true,
      alpha: true
    })
    this.renderer.setClearColor(0x000000, 0)

    //--- control
    this.controls = new THREE.OrbitControls(this.camera,this.renderer.domElement)

    this.render()
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  props: {
    loadimgSrc : String,
    movieList: Array,
  },
  computed: {
    $canvas() {
      return this.$refs.canvas
    },
    $ui(){
      return this.$refs.captureui
    }
  },
  methods: {
    onResize() {
      this.width = this.$el.clientWidth
      this.height = this.$el.clientHeight
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize( this.width, this.height)
    },

    render() {
      this.requestId = requestAnimationFrame(this.render)
      this.renderer.render(this.scene,this.camera)
      this.controls.update()
    },

    onClick( uitype ){
      switch ( uitype ) {
        case 0 :
                  this.$ui.setCaptureData( this.takepicture() );
          break;
        case 1 :
                  this.$ui.deleteCaptureData();
          break;
      }
    },

    next(){
      this.isloaded = false;
      this.video.pause();

      if( this.currentMovieIndex >= (this.movieList.length - 1)  ){
        this.currentMovieIndex = 0;
      } else {
       this.currentMovieIndex += 1;
      }

      this.moviePath = this.movieList[this.currentMovieIndex];
      setTimeout(() => {
            this.video.play();
      }, 500);
    },

    takepicture(){
        let resizedCanvas = document.createElement("canvas");
        let resizedContext = resizedCanvas.getContext("2d");
        let scale = 1;
        let dstWidth = 0;
        let dstHeight = 0;
        //--- カメラの画角でar側の縮小処理を変える
        if (this.width > this.height) {
            scale = 0.5;
        } else {
            //--- 縦長（スマホ）
            scale = 0.72;
            // dstWidth = this.width * scale;
            // dstHeight = this.height * scale
            // resizedCanvas.width = dstWidth;
            // resizedCanvas.height = dstHeight;
            // resizedContext.drawImage(this.$canvas, 0, 0, dstWidth, dstHeight);
        }
        dstWidth = this.width * scale;
        dstHeight = this.height * scale
        resizedCanvas.width = dstWidth;
        resizedCanvas.height = dstHeight;
        resizedContext.drawImage(this.$canvas, 0, 0, dstWidth, dstHeight);

        return resizedCanvas.toDataURL('image/png');
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .sphericalMovie{
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .loader{
    width: 100%;
    height: 100%;
    background-color: #FFF;
    position: absolute;
    pointer-events: none;
    transition: opacity .3s ease;
    &.hide{
      opacity: 0;
    }
  }
  .loadimg{
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  canvas{
    width: 100%;
    height: 100%;
  }

  #captureui{
    position: absolute;
    bottom: 75px;
    left: 50%;
    transform: translate(-50%, 0);
  }

</style>
