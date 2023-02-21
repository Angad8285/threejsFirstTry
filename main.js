// import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

// <!DOCTYPE html>
{/* <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    {/* <div id="app"></div>
    <script type="module" src="/main.js"></script> */}
  //   <canvas id="bg"></canvas>
  //   <script type="module" src="/main.js"></script>
  // </body>
// </html> */}


// import * as THREE from 'three';
// import './style.css';

// const scene = new THREE.scene();
// const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({
//   canvas: document.getElementById('#canvas__'),
//   antialias: true
// })

// const torusGeometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
// const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
// const torus = new THREE.Mesh( torusGeometry, material );
// const pontLight = new THREE.PointLight(0xffffff);
// pontLight.position.set(5,5,5);

// scene.add(torus);
// scene.add(pointLight);
// function animate() {
//   requestAnimationFrame(animate);

// }



// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, innerHeight);

// camera.position.setZ(30);
// camera.position.setX(-3);
// renderer.render(scene, camera);

//javascript.info <--- Read about javascript
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setZ(30);
// camera.position.setX(-3); 

// renderer.render(scene, camera);

// import './style.css';
// import * as THREE from 'three';

// // Setup
// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer({
//   canvas: document.getElementById('canvas__'),
//   antialias: true
// });

// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setZ(30);
// camera.position.setX(-3); 


// // Torus
// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
// const torus = new THREE.Mesh(geometry, material);

// scene.add(torus);


// // Lights
// const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(5, 5, 5);
// const ambientLight = new THREE.AmbientLight(0xffffff);

// // const ambientLight = new THREE.AmbientLight(0xffffff);
// scene.add(pointLight, ambientLight);

// const sphereSize =1;
// const pointLighthelper = new THREE.PointLightHelper(pointLight, sphereSize);
// const gridHelper = new THREE.GridHelper(200, 50);

// scene.add(pointLighthelper, gridHelper);

// // addStar
// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//   const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
//   const star = new THREE.Mesh(geometry, material);

//   const [x, y, z] = Array(3)
//     .fill()
//     .map(() => THREE.MathUtils.randFloatSpread(100));

//   star.position.set(x, y, z);
//   scene.add(star);
// }
// Array(400).fill().map(addStar);

// //Moon
// // const moon


// function animate() {
//   requestAnimationFrame(animate);

//   torus.rotation.x += 0.1;
//   torus.rotation.y += 0.005;
//   torus.rotation.z += 0.001;



//   renderer.render(scene, camera);
// }

// animate();



import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas__'),
  antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3); 


// Torus
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);


// Lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers
const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
const gridHelper = new THREE.GridHelper(200, 50);

scene.add( pointLightHelper, gridHelper );

//moons



// Orbital COntrol
const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(400).fill().map(addStar);

//Moon

const moonGeometry = new THREE.SphereGeometry(10, 24, 24);
const textureMap = new THREE.TextureLoader().load('./moon.jpg');
const normalMap = new THREE.TextureLoader().load('./normal.jpg');

// const moonMaterial

function animate(){
  requestAnimationFrame(animate);

  // torus.rotation.x += 0.01;
  // torus.rotation.y += 0.005;
  // torus.rotation.z += 0.001;
  
  renderer.render(scene, camera);
}




animate();