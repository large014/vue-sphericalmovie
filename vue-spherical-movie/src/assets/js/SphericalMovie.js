import OrbitControls from './libs/OrbitControls'

export default class SphericalMovie {


    /**
    * @class SphericalMovie
    */
    constructor( $canvas ) {
        console.log('test = ' + $canvas);
        this.$canvas = $canvas;
        this.initialize();
    }

    /**
    * initialize
    */
    initialize() {
        console.log('initialize');

        let width = window.innerWidth,
            height = window.innerHeight;
        console.log('js w = ' + width);
        console.log('js h = ' + height);

        this.scene = new THREE.Scene();
        this.container = new THREE.Object3D();
        // this.camera = new THREE.PerspectiveCamera();


        this.scene.add(this.container)
        //--- Mesh
        this.geometry = new THREE.SphereGeometry(5, 60, 40);
        this.geometry.scale(- 1, 1, 1);

        //--- Movie
        this.video = document.getElementById('video');
        this.video.play();

        // this.video = document.createElement('video');
        // this.video.width = 640;
        // this.video.height = 360;
        // this.video.autoplay = true;
        // this.video.loop = true;
        // this.video.src = "video/test.MP4";
        // this.video.load();
        // this.video.play()

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
        this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
        // this.camera = new THREE.PerspectiveCamera();
        this.camera.position.set(0, 0, 0.1);
        this.camera.lookAt(this.sphere.position);

        //--- render
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.$canvas,
            alpha: true
        })
        this.renderer.setClearColor(0x000000, 0)

        window.addEventListener('resize', this.onResize.bind(this), false);
        //--- control
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement)
        // this.renderer = new THREE.WebGLRenderer();
        // this.renderer.setSize(width, height);
        // this.renderer.setClearColor({ color: 0x000000 });
        // this.renderer.render(scene, camera);
        // document.getElementById('stage').appendChild(renderer.domElement);

        this.render();
    }

    /**
    * 描画処理
    */
    render(){
        // window.requestAnimationFrame(this.render )
        // this.requestId = requestAnimationFrame(() => { this.render() })
        // this.requestId = requestAnimationFrame(this.render.bind(this))
        this.requestId = requestAnimationFrame(() => { this.render() } )
        // this.sphere.rotation.y += 0.05 * Math.PI/180
        this.renderer.render(this.scene, this.camera)
        this.controls.update()
    }

    onResize() {
        this.camera.aspect = this.width / this.height
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(this.width, this.height)
        console.log('resize');

    }


}