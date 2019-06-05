<template>
  <div class="CaptureUIWrapper">
      <a href="#" id="take-photo" @click="onClick(0)">
        <i class="material-icons">photo_camera</i>
      </a>
      <a href="#" id="download-photo" ref="download" download="images/sample.png" target="_blank">
        <i class="material-icons">file_download</i>
      </a>
      <a href="#" id="delete-photo" @click="onClick(1)" >
        <i class="material-icons">delete</i>
      </a>
  </div>
</template>

<script>

import OrbitControls from '@/assets/js/libs/OrbitControls'

export default {
  name: 'CaptureUI',
  data() {
    return{
    }
  },
  created(){
  },
  mounted() {
  },
  props: {
  },
  computed: {
  },
  methods: {
    onClick( type ){
      console.log('type = ' + type);
      // this.$emit('ui-event', )
    },
    setCaptureData(src){
      this.$refs.download.href = src;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.CaptureUIWrapper{
    display: flex;
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
