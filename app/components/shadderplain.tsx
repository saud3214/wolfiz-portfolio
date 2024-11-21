import { useRef, useMemo, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Mesh } from 'three';
import MyShaderMaterial from './shadder';

const ShaderBackground = ({
  color1,
  color2,
  speed,
}: {
  color1: string;
  color2: string;
  speed: number;
}) => {
  const meshRef = useRef<Mesh>(null!);
  const { viewport, size } = useThree();

  // State to track current colors
  const [currentColors, setCurrentColors] = useState({
    color1: [0, 0, 0],
    color2: [0, 0, 0],
  });

  // Create an instance of MyShaderMaterial
  const material = useMemo(() => new MyShaderMaterial(), []);

  // Linear interpolation function
  const lerp = (start: number, end: number, t: number) =>
    start + (end - start) * t;

  useFrame(({ clock }) => {
    if (material) {
      // Keep shader animation running smoothly
      material.uniforms.u_time.value = clock.getElapsedTime() * speed;

      // Update resolution
      material.uniforms.u_resolution.value = [size.width, size.height];

      // Convert target colors from hex to RGB (normalized to [0, 1])
      const targetColor1 = [
        parseInt(color1.slice(1, 3), 16) / 255,
        parseInt(color1.slice(3, 5), 16) / 255,
        parseInt(color1.slice(5, 7), 16) / 255,
      ];
      const targetColor2 = [
        parseInt(color2.slice(1, 3), 16) / 255,
        parseInt(color2.slice(3, 5), 16) / 255,
        parseInt(color2.slice(5, 7), 16) / 255,
      ];

      // Smoothly interpolate colors
      setCurrentColors((prev) => ({
        color1: prev.color1.map((c, i) => lerp(c, targetColor1[i], 0.1)) as [
          number,
          number,
          number,
        ],
        color2: prev.color2.map((c, i) => lerp(c, targetColor2[i], 0.1)) as [
          number,
          number,
          number,
        ],
      }));

      // Update material uniforms with interpolated colors
      material.uniforms.u_color1.value.set(
        currentColors.color1[0],
        currentColors.color1[1],
        currentColors.color1[2],
      );
      material.uniforms.u_color2.value.set(
        currentColors.color2[0],
        currentColors.color2[1],
        currentColors.color2[2],
      );
    }
  });

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

export default ShaderBackground;
