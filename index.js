import { PointerLockControls } from "https://threejs.org/examples/jsm/controls/PointerLockControls.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

var scene = new THREE.Scene();  
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); 

var renderer = new THREE.WebGLRenderer(); 
renderer.setSize( window.innerWidth, window.innerHeight ); 
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const loader = new GLTFLoader();

loader.load( 'https://fightingox1.github.io/image_library/nerf_gun.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

camera.position.z = 5;

//Create an render loop to allow animation
var render = function () {
    requestAnimationFrame( render );

	

    renderer.render(scene, camera);
};

render();
