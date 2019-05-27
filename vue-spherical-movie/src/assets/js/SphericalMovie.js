import OrbitControls from './libs/OrbitControls'

export default class SphericalMovie {

    
    /**
    * @class SphericalMovie
    */
    constructor() {
        console.log('test');

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera();
        this.container = new THREE.Object3D();
        this.initialize();
    }

    /**
    * initialize
    */
    initialize() {
        console.log('initialize');
        this.scene.add(this.container)
        //--- Mesh
        this.geometry = new THREE.SphereGeometry(5, 60, 40);
        this.geometry.scale(- 1, 1, 1);

        //--- Movie
        this.video = document.createElement('video');
        this.video.width = 640;
        this.video.height = 360;
        this.video.autoplay = true;
        this.video.loop = true;
        this.video.src = "video/test.MP4";

        //--- Texture
        this.texture = new THREE.VideoTexture(this.video);
        this.texture.minFilter = THREE.LinearFilter;

        //--- Material
        this.material = new THREE.MeshBasicMaterial({ map: this.texture });

        this.sphere = new THREE.Mesh( this.geometry, this.material );
        this.scene.add( this.sphere );

    }

}