(function(e){function t(t){for(var o,r,s=t[0],c=t[1],u=t[2],l=0,h=[];l<s.length;l++)r=s[l],a[r]&&h.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},a={app:0},i=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1475:function(e,t,n){"use strict";var o=n("7a18"),a=n.n(o);a.a},"2b35":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("SphericalMovie",{ref:"movie",attrs:{movieSrc:"video/test2.mp4",movieList:e.movies,loadimgSrc:"loading/loading.gif"}}),n("div",{attrs:{id:"mockUI"}},[n("a",{attrs:{href:"#",id:"navi-next"},on:{click:e.next}},[n("i",{staticClass:"material-icons"},[e._v("navigate_next")])])])],1)},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sphericalMovie"},[n("CaptureUI",{ref:"captureui",attrs:{id:"captureui"},on:{"ui-event":function(t){return e.onClick(t)}}}),n("div",{staticClass:"loader",class:{hide:e.isloaded}},[n("img",{staticClass:"loadimg",attrs:{src:e.loadimgSrc,alt:""}})]),n("video",{ref:"video",staticStyle:{display:"none"},attrs:{id:"video",src:e.moviePath,muted:"",autoplay:"",loop:"",playsinline:""},domProps:{muted:!0}}),n("canvas",{ref:"canvas"})],1)},s=[];n("ac6a"),n("673e");THREE.OrbitControls=function(e,t){this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.target=new THREE.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={ORBIT:THREE.MOUSE.LEFT,ZOOM:THREE.MOUSE.MIDDLE,PAN:THREE.MOUSE.RIGHT},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(o),n.update(),s=r.NONE},this.update=function(){var t=new THREE.Vector3,a=(new THREE.Quaternion).setFromUnitVectors(e.up,new THREE.Vector3(0,1,0)),i=a.clone().inverse(),p=new THREE.Vector3,f=new THREE.Quaternion;return function(){var e=n.object.position;return t.copy(e).sub(n.target),t.applyQuaternion(a),u.setFromVector3(t),n.autoRotate&&s===r.NONE&&C(R()),u.theta+=d.theta,u.phi+=d.phi,u.theta=Math.max(n.minAzimuthAngle,Math.min(n.maxAzimuthAngle,u.theta)),u.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,u.phi)),u.makeSafe(),u.radius*=l,u.radius=Math.max(n.minDistance,Math.min(n.maxDistance,u.radius)),n.target.add(h),t.setFromSpherical(u),t.applyQuaternion(i),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor):d.set(0,0,0),l=1,h.set(0,0,0),!!(m||p.distanceToSquared(n.object.position)>c||8*(1-f.dot(n.object.quaternion))>c)&&(n.dispatchEvent(o),p.copy(n.object.position),f.copy(n.object.quaternion),m=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ne,!1),n.domElement.removeEventListener("mousedown",G,!1),n.domElement.removeEventListener("wheel",q,!1),n.domElement.removeEventListener("touchstart",J,!1),n.domElement.removeEventListener("touchend",te,!1),n.domElement.removeEventListener("touchmove",ee,!1),document.removeEventListener("mousemove",K,!1),document.removeEventListener("mouseup",W,!1),window.removeEventListener("keydown",Q,!1)};var n=this,o={type:"change"},a={type:"start"},i={type:"end"},r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},s=r.NONE,c=1e-6,u=new THREE.Spherical,d=new THREE.Spherical,l=1,h=new THREE.Vector3,m=!1,p=new THREE.Vector2,f=new THREE.Vector2,E=new THREE.Vector2,b=new THREE.Vector2,v=new THREE.Vector2,g=new THREE.Vector2,T=new THREE.Vector2,y=new THREE.Vector2,w=new THREE.Vector2;function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function O(){return Math.pow(.95,n.zoomSpeed)}function C(e){d.theta-=e}function H(e){d.phi-=e}var P=function(){var e=new THREE.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),h.add(e)}}(),j=function(){var e=new THREE.Vector3;return function(t,n){e.setFromMatrixColumn(n,1),e.multiplyScalar(t),h.add(e)}}(),x=function(){var e=new THREE.Vector3;return function(t,o){var a=n.domElement===document?n.domElement.body:n.domElement;if(n.object.isPerspectiveCamera){var i=n.object.position;e.copy(i).sub(n.target);var r=e.length();r*=Math.tan(n.object.fov/2*Math.PI/180),P(2*t*r/a.clientHeight,n.object.matrix),j(2*o*r/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),j(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function M(e){n.object.isPerspectiveCamera?l/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(e){n.object.isPerspectiveCamera?l*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function L(e){p.set(e.clientX,e.clientY)}function S(e){T.set(e.clientX,e.clientY)}function D(e){b.set(e.clientX,e.clientY)}function A(e){f.set(e.clientX,e.clientY),E.subVectors(f,p);var t=n.domElement===document?n.domElement.body:n.domElement;C(2*Math.PI*E.x/t.clientWidth*n.rotateSpeed),H(2*Math.PI*E.y/t.clientHeight*n.rotateSpeed),p.copy(f),n.update()}function N(e){y.set(e.clientX,e.clientY),w.subVectors(y,T),w.y>0?M(O()):w.y<0&&k(O()),T.copy(y),n.update()}function U(e){v.set(e.clientX,e.clientY),g.subVectors(v,b),x(g.x,g.y),b.copy(v),n.update()}function I(e){}function _(e){e.deltaY<0?k(O()):e.deltaY>0&&M(O()),n.update()}function z(e){switch(e.keyCode){case n.keys.UP:x(0,n.keyPanSpeed),n.update();break;case n.keys.BOTTOM:x(0,-n.keyPanSpeed),n.update();break;case n.keys.LEFT:x(n.keyPanSpeed,0),n.update();break;case n.keys.RIGHT:x(-n.keyPanSpeed,0),n.update();break}}function V(e){p.set(e.touches[0].pageX,e.touches[0].pageY)}function F(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);T.set(0,o)}function Z(e){b.set(e.touches[0].pageX,e.touches[0].pageY)}function Y(e){f.set(e.touches[0].pageX,e.touches[0].pageY),E.subVectors(f,p);var t=n.domElement===document?n.domElement.body:n.domElement;C(2*Math.PI*E.x/t.clientWidth*n.rotateSpeed),H(2*Math.PI*E.y/t.clientHeight*n.rotateSpeed),p.copy(f),n.update()}function $(e){var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(t*t+o*o);y.set(0,a),w.subVectors(y,T),w.y>0?k(O()):w.y<0&&M(O()),T.copy(y),n.update()}function X(e){v.set(e.touches[0].pageX,e.touches[0].pageY),g.subVectors(v,b),x(g.x,g.y),b.copy(v),n.update()}function B(e){}function G(e){if(!1!==n.enabled){switch(e.preventDefault(),e.button){case n.mouseButtons.ORBIT:if(!1===n.enableRotate)return;L(e),s=r.ROTATE;break;case n.mouseButtons.ZOOM:if(!1===n.enableZoom)return;S(e),s=r.DOLLY;break;case n.mouseButtons.PAN:if(!1===n.enablePan)return;D(e),s=r.PAN;break}s!==r.NONE&&(document.addEventListener("mousemove",K,!1),document.addEventListener("mouseup",W,!1),n.dispatchEvent(a))}}function K(e){if(!1!==n.enabled)switch(e.preventDefault(),s){case r.ROTATE:if(!1===n.enableRotate)return;A(e);break;case r.DOLLY:if(!1===n.enableZoom)return;N(e);break;case r.PAN:if(!1===n.enablePan)return;U(e);break}}function W(e){!1!==n.enabled&&(I(e),document.removeEventListener("mousemove",K,!1),document.removeEventListener("mouseup",W,!1),n.dispatchEvent(i),s=r.NONE)}function q(e){!1===n.enabled||!1===n.enableZoom||s!==r.NONE&&s!==r.ROTATE||(e.preventDefault(),e.stopPropagation(),n.dispatchEvent(a),_(e),n.dispatchEvent(i))}function Q(e){!1!==n.enabled&&!1!==n.enableKeys&&!1!==n.enablePan&&z(e)}function J(e){if(!1!==n.enabled){switch(e.touches.length){case 1:if(!1===n.enableRotate)return;V(e),s=r.TOUCH_ROTATE;break;case 2:if(!1===n.enableZoom)return;F(e),s=r.TOUCH_DOLLY;break;case 3:if(!1===n.enablePan)return;Z(e),s=r.TOUCH_PAN;break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(a)}}function ee(e){if(!1!==n.enabled)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:if(!1===n.enableRotate)return;if(s!==r.TOUCH_ROTATE)return;Y(e);break;case 2:if(!1===n.enableZoom)return;if(s!==r.TOUCH_DOLLY)return;$(e);break;case 3:if(!1===n.enablePan)return;if(s!==r.TOUCH_PAN)return;X(e);break;default:s=r.NONE}}function te(e){!1!==n.enabled&&(B(e),n.dispatchEvent(i),s=r.NONE)}function ne(e){!1!==n.enabled&&e.preventDefault()}n.domElement.addEventListener("contextmenu",ne,!1),n.domElement.addEventListener("mousedown",G,!1),n.domElement.addEventListener("wheel",q,!1),n.domElement.addEventListener("touchstart",J,!1),n.domElement.addEventListener("touchend",te,!1),n.domElement.addEventListener("touchmove",ee,!1),window.addEventListener("keydown",Q,!1),this.update()},THREE.OrbitControls.prototype=Object.create(THREE.EventDispatcher.prototype),THREE.OrbitControls.prototype.constructor=THREE.OrbitControls,Object.defineProperties(THREE.OrbitControls.prototype,{center:{get:function(){return console.warn("THREE.OrbitControls: .center has been renamed to .target"),this.target}},noZoom:{get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(e){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!e}},noRotate:{get:function(){return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),!this.enableRotate},set:function(e){console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),this.enableRotate=!e}},noPan:{get:function(){return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),!this.enablePan},set:function(e){console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),this.enablePan=!e}},noKeys:{get:function(){return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),!this.enableKeys},set:function(e){console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),this.enableKeys=!e}},staticMoving:{get:function(){return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),!this.enableDamping},set:function(e){console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),this.enableDamping=!e}},dynamicDampingFactor:{get:function(){return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor},set:function(e){console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor=e}}});var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"CaptureUIWrapper"},[n("img",{ref:"sampleimg",staticClass:"sampleimg",class:{off:!e.isCaptureData},attrs:{src:"",alt:""}}),n("div",{staticClass:"uiArea"},[n("a",{attrs:{href:"#",id:"take-photo"},on:{click:function(t){return e.onClick(0)}}},[n("i",{staticClass:"material-icons"},[e._v("photo_camera")])]),n("a",{ref:"download",class:{off:!e.isCaptureData},attrs:{href:"#",id:"download-photo",download:"images/sample.png",target:"_blank"}},[n("i",{staticClass:"material-icons"},[e._v("file_download")])]),n("a",{class:{off:!e.isCaptureData},attrs:{href:"#",id:"delete-photo"},on:{click:function(t){return e.onClick(1)}}},[n("i",{staticClass:"material-icons"},[e._v("delete")])])])])},u=[],d={name:"CaptureUI",data:function(){return{isCaptureData:!1}},created:function(){},mounted:function(){},props:{},computed:{},methods:{onClick:function(e){this.$emit("ui-event",e)},setCaptureData:function(e){this.$refs.download.href=e,this.$refs.sampleimg.src=e,this.isCaptureData=!0},deleteCaptureData:function(){this.isCaptureData=!1,this.$refs.download.href="#",this.$refs.sampleimg.src=""}}},l=d,h=(n("1475"),n("2877")),m=Object(h["a"])(l,c,u,!1,null,"4f0951e4",null),p=m.exports,f={name:"sphericalMovie",data:function(){return{test:null,width:0,height:0,moviePath:this.movieList[0],isloaded:!1,requestId:void 0,scene:new THREE.Scene,camera:new THREE.PerspectiveCamera,container:new THREE.Object3D,spheres:[],currentMovieIndex:0}},components:{CaptureUI:p},created:function(){},mounted:function(){var e=this;this.scene.add(this.container),this.geometry=new THREE.SphereGeometry(5,60,40),this.geometry.scale(-1,1,1),this.video=document.getElementById("video"),this.video.play(),this.video.addEventListener("loadeddata",function(){console.log("video complete!"),e.isloaded=!0}),this.texture=new THREE.VideoTexture(this.video),this.texture.minFilter=THREE.LinearFilter,this.texture.magFilter=THREE.LinearFilter,this.texture.format=THREE.RGBFormat,this.material=new THREE.MeshBasicMaterial({map:this.texture}),this.sphere=new THREE.Mesh(this.geometry,this.material),this.container.add(this.sphere),this.camera.position.set(0,0,1),this.camera.lookAt(this.container.position),this.renderer=new THREE.WebGLRenderer({canvas:this.$canvas,preserveDrawingBuffer:!0,alpha:!0}),this.renderer.setClearColor(0,0),this.controls=new THREE.OrbitControls(this.camera,this.renderer.domElement),this.render(),window.addEventListener("resize",this.onResize),this.onResize()},props:{loadimgSrc:String,movieList:Array},computed:{$canvas:function(){return this.$refs.canvas},$ui:function(){return this.$refs.captureui}},methods:{onResize:function(){this.width=this.$el.clientWidth,this.height=this.$el.clientHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)},render:function(){this.requestId=requestAnimationFrame(this.render),this.renderer.render(this.scene,this.camera),this.controls.update()},onClick:function(e){switch(e){case 0:this.$ui.setCaptureData(this.takepicture());break;case 1:this.$ui.deleteCaptureData();break}},next:function(){var e=this;this.isloaded=!1,this.video.pause(),this.currentMovieIndex>=this.movieList.length-1?this.currentMovieIndex=0:this.currentMovieIndex+=1,this.moviePath=this.movieList[this.currentMovieIndex],setTimeout(function(){e.video.play()},500)},takepicture:function(){var e=document.createElement("canvas"),t=e.getContext("2d"),n=1,o=0,a=0;return n=this.width>this.height?.5:.72,o=this.width*n,a=this.height*n,e.width=o,e.height=a,t.drawImage(this.$canvas,0,0,o,a),e.toDataURL("image/png")}}},E=f,b=(n("966d"),Object(h["a"])(E,r,s,!1,null,"1686a191",null)),v=b.exports,g={name:"app",data:function(){return{movies:["video/test2.mp4","video/test1.mp4","video/test3.mp4"]}},components:{SphericalMovie:v},methods:{next:function(){this.$refs.movie.next()}}},T=g,y=(n("c43b"),Object(h["a"])(T,a,i,!1,null,"2b8080e1",null)),w=y.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(w)}}).$mount("#app")},"7a18":function(e,t,n){},"966d":function(e,t,n){"use strict";var o=n("2b35"),a=n.n(o);a.a},c43b:function(e,t,n){"use strict";var o=n("ca02"),a=n.n(o);a.a},ca02:function(e,t,n){}});
//# sourceMappingURL=app.ba3bf29b.js.map