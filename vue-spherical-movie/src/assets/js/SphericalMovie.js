import OrbitControls from './libs/OrbitControls'

export default class SphericalMovie {


    /**
    * @class SphericalMovie
    */
    constructor( $canvas ) {
        console.log('test = ' + $canvas);
        this.initialize();
    }

    /**
    * initialize
    */
    initialize() {
        console.log('initialize');

        let width = window.innerWidth,
            height = window.innerHeight;

        this.scene = new THREE.Scene();
        this.container = new THREE.Object3D();
        // this.camera = new THREE.PerspectiveCamera();


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
        this.scene.add(this.sphere);

        //--- camera
        this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
        this.camera.position.set(0, 0, 0.1);
        this.camera.lookAt(this.sphere.position);

        //--- render
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.$canvas,
            alpha: true
        })
        this.renderer.setClearColor(0x000000, 0)

        // this.renderer = new THREE.WebGLRenderer();
        // this.renderer.setSize(width, height);
        // this.renderer.setClearColor({ color: 0x000000 });
        // this.renderer.render(scene, camera);
        // document.getElementById('stage').appendChild(renderer.domElement);



    }

}