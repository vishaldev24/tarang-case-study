import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  theme: string;
}

const ParticleField = ({ color }: { color: string }) => {
  const count = 1500;
  const mesh = useRef<THREE.Points>(null!);
  const { mouse } = useThree();

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15; // z
    }
    return positions;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y = time * 0.03;
      
      const targetRotationX = mouse.y * 0.1;
      const targetRotationY = mouse.x * 0.1;
      
      mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, targetRotationX + (time * 0.01), 0.05);
      mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, targetRotationY + (time * 0.03), 0.05);
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color={color} 
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ theme }) => {
  // Disable 3D logic entirely for Eco mode
  if (theme === 'eco') return null;

  // Configuration based on theme
  const isLight = theme === 'light' || theme === 'calm';
  const fogColor = isLight ? '#f3f4f6' : (theme === 'calm' ? '#F5F5F0' : '#0D0D0D');
  const particleColor = isLight ? '#4f46e5' : '#6366f1';

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <fog attach="fog" args={[fogColor, 3, 12]} />
      <ParticleField color={particleColor} />
    </Canvas>
  );
};