import './style.css'

import * as THREE from "three";

// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Three main parts
// 1. Scene #scene is essentially a container
// 2. Camera
// 3. Renderer

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.2, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);


// Next Three main parts
// 1. Geometry #the {x, y, z} points that makeup a shape
// 2. Material #the wrapping paper for an object
// 3. Mesh #Geometry + Material

// Torus
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: "#2e073e", "wireframe": false });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

// Lights
// You need to add a light if you are not using THREE.MeshBasicMaterial()
const pointLight = new THREE.PointLight("#ffffff");
pointLight.position.set(5,5,5);

const ambientLight = new THREE.AmbientLight("#ffffff");
scene.add(pointLight, ambientLight);

// Helpers
// Helper functions (comment out before pushing to production)
// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

// Adding the options to move the camera with the mouse
// const controls = new OrbitControls(camera, renderer.domElement);


// Background stars/ points
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({color: "#ffffff"});
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);

};

Array(200).fill().forEach(addStar);

// Adding the background
const oceanTexture = new THREE.TextureLoader().load("underwater.jpeg");
scene.background = oceanTexture;

// Add the fish character
const fishTexture = new THREE.TextureLoader().load("fish.png");
const fish = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({map: fishTexture})
);

scene.add(fish);

// Add an extra background feature (coral)
const coralTexture = new THREE.TextureLoader().load("coral.png");
const coral = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshBasicMaterial({map: coralTexture})
);

scene.add(coral);

coral.position.z = 30;
coral.position.setX(-10);

fish.position.z = -5;
fish.position.x = 2;

// Scroll animation
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  coral.rotation.x += 0.00005;
  coral.rotation.y += 0.000075;
  coral.rotation.z += 0.000005;

  fish.rotation.y += 0.01;
  fish.rotation.z += 0.01;

  camera.position.z += t * -0.000001;
  camera.position.x += t * -0.000002;
  camera.rotation.y += t * -0.000002;

};

document.body.onscroll = moveCamera;
moveCamera();

// Rendering the main shape animation
function animate() {
  requestAnimationFrame( animate );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  coral.rotation.x += 0.005;

  // controls.update();

  renderer.render(scene, camera);
};

animate();