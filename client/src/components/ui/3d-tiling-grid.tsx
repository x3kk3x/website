import { useEffect, useRef } from 'react';
import { useTheme } from '@/components/ThemeContext';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface ThreeDTilingGridProps {
  rows?: number;
  columns?: number;
  spacing?: number;
  tileSize?: number;
  rotationSpeed?: number;
  className?: string;
}

const ThreeDTilingGrid = ({
  rows = 3,
  columns = 5,
  spacing = 0.5,
  tileSize = 1,
  rotationSpeed = 0.01,
  className = ''
}: ThreeDTilingGridProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const { elementRef, isIntersecting } = useIntersectionObserver();
  
  useEffect(() => {
    if (!isIntersecting) return;
    
    // Load Three.js dynamically
    const loadThreeJS = async () => {
      const THREE = await import('three');
      
      if (!containerRef.current) return;
      
      // Setup the scene
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
      
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      renderer.setClearColor(0x000000, 0);
      
      // Clear any previous canvas
      if (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
      containerRef.current.appendChild(renderer.domElement);
      
      // Create tile grid
      const tiles = [];
      const gridWidth = columns * (tileSize + spacing) - spacing;
      const gridHeight = rows * (tileSize + spacing) - spacing;
      const startX = -gridWidth / 2 + tileSize / 2;
      const startZ = -gridHeight / 2 + tileSize / 2;
      
      // Create materials for the tiles (different colors for light/dark theme)
      const primaryColor = theme === 'dark' ? 0xD3D3D3 : 0x1A2B6D;
      const accentColor = theme === 'dark' ? 0x2A4B8D : 0x3A5BBD;
      
      // Create geometries
      const tileGeometry = new THREE.BoxGeometry(tileSize, tileSize * 0.1, tileSize);
      
      // Create tile grid
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          // Alternate tile colors
          const isAlternate = (row + col) % 2 === 0;
          const tileMaterial = new THREE.MeshStandardMaterial({
            color: isAlternate ? primaryColor : accentColor,
            roughness: 0.3,
            metalness: 0.4,
          });
          
          const tile = new THREE.Mesh(tileGeometry, tileMaterial);
          tile.position.set(
            startX + col * (tileSize + spacing),
            0,
            startZ + row * (tileSize + spacing)
          );
          
          // Add random initial rotation
          tile.rotation.y = Math.random() * Math.PI * 2;
          
          scene.add(tile);
          tiles.push({
            mesh: tile,
            initialY: tile.position.y,
            rotationSpeed: rotationSpeed * (0.8 + Math.random() * 0.4), // Slight variation in speed
            hoverDirection: Math.random() > 0.5 ? 1 : -1, // Random hover direction
            hoverSpeed: 0.01 + Math.random() * 0.01, // Random hover speed
            hoverHeight: 0.05 + Math.random() * 0.1, // Random hover height
            hoverOffset: Math.random() * Math.PI * 2, // Random hover offset
          });
        }
      }
      
      // Add lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 10, 7);
      scene.add(directionalLight);
      
      // Position camera
      camera.position.z = Math.max(rows, columns) * (tileSize + spacing) * 1.2;
      camera.position.y = camera.position.z * 0.6;
      camera.lookAt(0, 0, 0);
      
      // Animation loop
      let animationFrameId: number;
      let time = 0;
      
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        time += 0.01;
        
        // Animate each tile
        tiles.forEach((tile) => {
          // Rotate the tile
          tile.mesh.rotation.y += tile.rotationSpeed;
          
          // Make tiles hover up and down
          tile.mesh.position.y = tile.initialY + Math.sin(time + tile.hoverOffset) * tile.hoverHeight * tile.hoverDirection;
        });
        
        renderer.render(scene, camera);
      };
      
      animate();
      
      // Handle window resize
      const handleResize = () => {
        if (!containerRef.current) return;
        
        camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Cleanup function
      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        
        // Dispose resources
        tileGeometry.dispose();
        tiles.forEach(tile => {
          if (tile.mesh.material instanceof THREE.Material) {
            tile.mesh.material.dispose();
          }
        });
        renderer.dispose();
      };
    };
    
    loadThreeJS();
  }, [columns, rows, spacing, tileSize, rotationSpeed, theme, isIntersecting]);
  
  return (
    <div 
      ref={(el) => {
        // Assign the ref to containerRef
        if (el) {
          containerRef.current = el;
          // The elementRef is a ref object, not a function
          if (elementRef) {
            (elementRef as React.MutableRefObject<HTMLElement | null>).current = el;
          }
        }
      }}
      className={`w-full h-96 ${className}`} 
    />
  );
};

export default ThreeDTilingGrid;