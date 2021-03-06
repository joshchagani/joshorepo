import {
  Scene,
  BoxBufferGeometry,
  WebGLRenderer,
  MeshLambertMaterial,
  Mesh,
  OrthographicCamera,
  AmbientLight,
  DirectionalLight,
  ColorRepresentation,
  Group,
} from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface IGeometryCoordinates {
  x: number;
  y: number;
  z: number;
}

const MAX_WIDTH = 1200;
const BLOCK_SIZE = 0.6;

class ModelCar {
  scene: Scene;
  camera: any;
  ambientLight: any;
  directionalLight: any;
  renderer: any;
  canvasEl: HTMLCanvasElement;
  width: number;
  controls: any;

  constructor(canvasSelector: string) {
    this.scene = new Scene();
    this.canvasEl = document.querySelector(canvasSelector)!;
    this.width = window.innerWidth < MAX_WIDTH ? window.innerWidth : MAX_WIDTH;
  }

  createLights() {
    this.ambientLight = new AmbientLight(0xffffff, 0.6);
    this.directionalLight = new DirectionalLight(0xffffff, 0.8);
    this.directionalLight.position.set(200, 500, 300);
    this.addObjectToScene([this.ambientLight, this.directionalLight]);
  }

  createCamera() {
    const aspectRatio = this.width / (window.innerHeight * BLOCK_SIZE);
    const cameraWidth = 150;
    const cameraHeight = cameraWidth / aspectRatio;
    this.camera = new OrthographicCamera(
      cameraWidth / -2,
      cameraWidth / 2,
      cameraHeight / 2,
      cameraHeight / -2,
      0,
      1000
    );
    this.camera.position.set(200, 200, 200);
    this.camera.lookAt(0, 10, 0);
  }

  renderScene() {
    this.renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas: this.canvasEl,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight * BLOCK_SIZE);
    this.renderer.render(this.scene, this.camera);
    const loadingElement = document.querySelector('.canvas-loader');
    loadingElement?.remove();
  }

  static createMesh({
    geometryCoordinates,
    materialColor,
  }: {
    geometryCoordinates: IGeometryCoordinates;
    materialColor: ColorRepresentation;
  }) {
    const geometry = new BoxBufferGeometry(
      geometryCoordinates.x,
      geometryCoordinates.y,
      geometryCoordinates.z
    );
    const material = new MeshLambertMaterial({ color: materialColor });
    const mesh = new Mesh(geometry, material);
    return mesh;
  }

  addObjectToScene(sceneObject: any | any[]) {
    if (Array.isArray(sceneObject)) {
      for (const object of sceneObject) {
        this.scene.add(object);
      }
    } else {
      this.scene.add(sceneObject);
    }
  }

  addOrbitControls() {
    this.controls = new OrbitControls(this.camera, this.canvasEl);
    this.controls.autoRotate = true;
    this.controls.enabled = false;
    this.controls.update();
  }
}

const modelCar = new ModelCar('#canvas-car-model');
const carGroup = new Group();

const frontWheels = ModelCar.createMesh({
  geometryCoordinates: { x: 12, y: 12, z: 33 },
  materialColor: 0x333333,
});
const backWheels = ModelCar.createMesh({
  geometryCoordinates: { x: 12, y: 12, z: 33 },
  materialColor: 0x333333,
});
const main = ModelCar.createMesh({
  geometryCoordinates: { x: 60, y: 15, z: 30 },
  materialColor: 0x78b14b,
});
const cabin = ModelCar.createMesh({
  geometryCoordinates: { x: 33, y: 12, z: 24 },
  materialColor: 0xffffff,
});

cabin.position.x = -6;
cabin.position.y = 25.5;
frontWheels.position.y = 6;
frontWheels.position.x = 18;
backWheels.position.y = 6;
backWheels.position.x = -18;
main.position.y = 12;

carGroup.add(frontWheels);
carGroup.add(backWheels);
carGroup.add(main);
carGroup.add(cabin);
carGroup.position.y = -15;

modelCar.createLights();
modelCar.createCamera();
modelCar.addObjectToScene(carGroup);
modelCar.addOrbitControls();
modelCar.renderScene();

window.addEventListener('resize', () => {
  modelCar.width =
    window.innerWidth < MAX_WIDTH ? window.innerWidth : MAX_WIDTH;
  modelCar.createCamera();
  modelCar.renderScene();
});

function animate() {
  requestAnimationFrame(animate);
  if (modelCar.controls) modelCar.controls.update();
  modelCar.renderer.render(modelCar.scene, modelCar.camera);
}

animate();
