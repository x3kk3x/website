import { useEffect, useRef } from 'react';
import { useTheme } from '@/components/ThemeContext';

const ThreeDTile = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    // Load Three.js dynamically
    const loadThreeJS = async () => {
      const THREE = await import('three');
      
      if (!containerRef.current) return;
      
      // Setup the scene
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(200, 200);
      renderer.setClearColor(0x000000, 0);
      
      // Clear any previous canvas
      if (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
      containerRef.current.appendChild(renderer.domElement);
      
      // Create a ceramic tile geometry
      const tileGeometry = new THREE.BoxGeometry(3, 0.2, 3);
      
      // Create materials for the tile (different colors for light/dark theme)
      const primaryColor = theme === 'dark' ? 0xD3D3D3 : 0x1A2B6D;
      const tileMaterial = new THREE.MeshStandardMaterial({
        color: primaryColor,
        roughness: 0.3,
        metalness: 0.4,
      });
      
      // Create the tile mesh
      const tile = new THREE.Mesh(tileGeometry, tileMaterial);
      scene.add(tile);
      
      // Add lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 10, 7);
      scene.add(directionalLight);
      
      // Position camera
      camera.position.z = 5;
      camera.position.y = 2;
      camera.lookAt(0, 0, 0);
      
      // Animation loop
      let animationFrameId: number;
      
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        tile.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      
      animate();
      
      // Cleanup function
      return () => {
        cancelAnimationFrame(animationFrameId);
        // Dispose resources
        tileGeometry.dispose();
        tileMaterial.dispose();
        renderer.dispose();
      };
    };
    
    loadThreeJS();
  }, [theme]);
  
  return (
    <div ref={containerRef} className="mx-auto h-[200px] w-[200px] flex items-center justify-center" />
  );
};

export default ThreeDTile;
