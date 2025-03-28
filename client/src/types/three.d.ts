declare module 'three' {
  export class Scene {
    add(object: any): void;
  }
  
  export class PerspectiveCamera {
    constructor(fov: number, aspect: number, near: number, far: number);
    position: { x: number, y: number, z: number };
    aspect: number;
    lookAt(x: number, y: number, z: number): void;
    updateProjectionMatrix(): void;
  }
  
  export class WebGLRenderer {
    constructor(options?: { alpha?: boolean, antialias?: boolean });
    setSize(width: number, height: number): void;
    setClearColor(color: number, alpha: number): void;
    render(scene: Scene, camera: PerspectiveCamera): void;
    dispose(): void;
    domElement: HTMLCanvasElement;
  }
  
  export class BoxGeometry {
    constructor(width: number, height: number, depth: number);
    dispose(): void;
  }
  
  export class MeshStandardMaterial {
    constructor(params: { 
      color?: number, 
      roughness?: number, 
      metalness?: number 
    });
    dispose(): void;
  }
  
  export class Mesh {
    constructor(geometry: BoxGeometry, material: MeshStandardMaterial);
    position: { x: number, y: number, z: number, set: (x: number, y: number, z: number) => void };
    rotation: { x: number, y: number, z: number };
  }
  
  export class AmbientLight {
    constructor(color: number, intensity: number);
  }
  
  export class DirectionalLight {
    constructor(color: number, intensity: number);
    position: { x: number, y: number, z: number, set: (x: number, y: number, z: number) => void };
  }
  
  export class Material {
    dispose(): void;
  }
}