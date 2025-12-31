"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Rotating wireframe cube
function WireframeCube({
  position,
  scale = 1,
  speed = 0.3,
}: {
  position: [number, number, number];
  scale?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.8;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="#ffc962" wireframe opacity={0.3} transparent />
    </mesh>
  );
}

// Rotating wireframe octahedron
function WireframeOctahedron({
  position,
  scale = 1,
  speed = 0.2,
}: {
  position: [number, number, number];
  scale?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.6;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#f97316" wireframe opacity={0.25} transparent />
    </mesh>
  );
}

// Rotating wireframe icosahedron
function WireframeIcosahedron({
  position,
  scale = 1,
  speed = 0.15,
}: {
  position: [number, number, number];
  scale?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#ffc962" wireframe opacity={0.2} transparent />
    </mesh>
  );
}

// Floating ring
function WireframeRing({
  position,
  scale = 1,
  speed = 0.25,
}: {
  position: [number, number, number];
  scale?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x =
        Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[1, 0.02, 16, 64]} />
      <meshBasicMaterial color="#f97316" opacity={0.35} transparent />
    </mesh>
  );
}

// Enhanced Particles with dynamic movement
function Particles({ count = 100 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  // Store original positions and velocities
  const { positions, velocities, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Spread particles in a wider area
      positions[i * 3] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 3;

      // Random velocities for floating effect
      velocities[i * 3] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.005;

      // Varied sizes for depth effect
      sizes[i] = Math.random() * 0.08 + 0.02;
    }
    return { positions, velocities, sizes };
  }, [count]);

  // Create colors for gradient effect
  const colors = useMemo(() => {
    const colors = new Float32Array(count * 3);
    const color1 = new THREE.Color("#ffc962"); // Golden
    const color2 = new THREE.Color("#f97316"); // Orange
    const color3 = new THREE.Color("#ff6b6b"); // Coral

    for (let i = 0; i < count; i++) {
      const t = Math.random();
      let color: THREE.Color;

      if (t < 0.5) {
        color = color1.clone().lerp(color2, t * 2);
      } else {
        color = color2.clone().lerp(color3, (t - 0.5) * 2);
      }

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return colors;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      const positionAttr = points.current.geometry.attributes.position;
      if (!positionAttr || !velocities) return;
      const posArray = positionAttr.array as Float32Array;

      for (let i = 0; i < count; i++) {
        // Floating movement
        posArray[i * 3] = posArray[i * 3]! + velocities[i * 3]!;
        posArray[i * 3 + 1] = posArray[i * 3 + 1]! + velocities[i * 3 + 1]!;
        posArray[i * 3 + 2] = posArray[i * 3 + 2]! + velocities[i * 3 + 2]!;

        // Add wave motion
        posArray[i * 3 + 1] =
          posArray[i * 3 + 1]! +
          Math.sin(state.clock.elapsedTime + i * 0.1) * 0.002;

        // Wrap around boundaries
        if (posArray[i * 3]! > 18) posArray[i * 3] = -18;
        if (posArray[i * 3]! < -18) posArray[i * 3] = 18;
        if (posArray[i * 3 + 1]! > 18) posArray[i * 3 + 1] = -18;
        if (posArray[i * 3 + 1]! < -18) posArray[i * 3 + 1] = 18;
      }

      positionAttr.needsUpdate = true;

      // Slow rotation of entire particle system
      points.current.rotation.z = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Scene component
function Scene() {
  return (
    <>
      {/* Geometric shapes scattered around */}
      <WireframeCube position={[6, 3, -8]} scale={2} speed={0.2} />
      <WireframeCube position={[-7, -2, -10]} scale={1.5} speed={0.15} />

      <WireframeOctahedron position={[-5, 4, -6]} scale={1.8} speed={0.18} />
      <WireframeOctahedron position={[8, -3, -12]} scale={2.5} speed={0.1} />

      <WireframeIcosahedron position={[4, -4, -7]} scale={1.5} speed={0.12} />
      <WireframeIcosahedron position={[-8, 1, -9]} scale={2} speed={0.08} />

      {/* Particles */}
      <Particles count={120} />
    </>
  );
}

// Main component
export default function ThreeScene() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
