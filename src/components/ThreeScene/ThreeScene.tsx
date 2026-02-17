"use client";

import { useRef, useMemo, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Shared mouse state (avoids re-renders)
const mouse = { x: 0, y: 0 };

// Wireframe shape with floating + mouse parallax
function FloatingWireframe({
  position,
  scale = 1,
  speed = 0.2,
  geometry,
  color = "#ffc962",
  opacity = 0.25,
  parallaxFactor = 0.3,
  floatAmplitude = 0.4,
  floatSpeed = 0.8,
}: {
  position: [number, number, number];
  scale?: number;
  speed?: number;
  geometry: "box" | "octahedron" | "icosahedron";
  color?: string;
  opacity?: number;
  parallaxFactor?: number;
  floatAmplitude?: number;
  floatSpeed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const basePos = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;

    // Rotation
    meshRef.current.rotation.x = t * speed;
    meshRef.current.rotation.y = t * speed * 0.7;

    // Floating bob
    meshRef.current.position.y =
      basePos.y + Math.sin(t * floatSpeed + basePos.x) * floatAmplitude;
    meshRef.current.position.x =
      basePos.x +
      Math.sin(t * floatSpeed * 0.6 + basePos.y) * floatAmplitude * 0.3;

    // Mouse parallax — shapes closer to camera move more
    const depth = Math.abs(basePos.z);
    const pFactor = parallaxFactor * (1 / (depth * 0.15 + 1));
    meshRef.current.position.x += mouse.x * pFactor;
    meshRef.current.position.y += mouse.y * pFactor;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {geometry === "box" && <boxGeometry args={[1, 1, 1]} />}
      {geometry === "octahedron" && <octahedronGeometry args={[1, 0]} />}
      {geometry === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
      <meshBasicMaterial
        color={color}
        wireframe
        opacity={opacity}
        transparent
      />
    </mesh>
  );
}

// Particles with soft glow and movement
function Particles({ count = 80 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;

      velocities[i * 3] = (Math.random() - 0.5) * 0.008;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.008;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
    }
    return { positions, velocities };
  }, [count]);

  const colors = useMemo(() => {
    const colors = new Float32Array(count * 3);
    const golden = new THREE.Color("#ffc962");
    const orange = new THREE.Color("#f97316");
    const warm = new THREE.Color("#ffaa44");

    for (let i = 0; i < count; i++) {
      const t = Math.random();
      const color =
        t < 0.4
          ? golden.clone().lerp(warm, t / 0.4)
          : warm.clone().lerp(orange, (t - 0.4) / 0.6);

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return colors;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    const positionAttr = points.current.geometry.attributes.position;
    if (!positionAttr) return;
    const posArray = positionAttr.array as Float32Array;
    const t = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      posArray[ix] = posArray[ix]! + velocities[ix]!;
      posArray[iy] = posArray[iy]! + velocities[iy]!;
      posArray[iz] = posArray[iz]! + velocities[iz]!;

      // Gentle wave
      posArray[iy] =
        posArray[iy]! + Math.sin(t * 0.5 + i * 0.15) * 0.001;

      // Wrap
      if (posArray[ix]! > 20) posArray[ix] = -20;
      if (posArray[ix]! < -20) posArray[ix] = 20;
      if (posArray[iy]! > 20) posArray[iy] = -20;
      if (posArray[iy]! < -20) posArray[iy] = 20;
    }

    positionAttr.needsUpdate = true;

    // Mouse parallax on whole particle system
    points.current.position.x = mouse.x * 0.15;
    points.current.position.y = mouse.y * 0.15;
    points.current.rotation.z = t * 0.015;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Mouse tracker component (runs inside Canvas)
function MouseTracker() {
  const { size } = useThree();

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      // Normalize to -1..1
      mouse.x = (e.clientX / size.width - 0.5) * 2;
      mouse.y = -(e.clientY / size.height - 0.5) * 2;
    },
    [size.width, size.height],
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return null;
}

function Scene() {
  return (
    <>
      <MouseTracker />

      {/* Cubes */}
      <FloatingWireframe
        position={[7, 3, -9]}
        scale={2}
        speed={0.15}
        geometry="box"
        color="#ffc962"
        opacity={0.2}
        floatAmplitude={0.5}
      />
      <FloatingWireframe
        position={[-6, -3, -11]}
        scale={1.4}
        speed={0.12}
        geometry="box"
        color="#ffc962"
        opacity={0.15}
        floatAmplitude={0.3}
      />

      {/* Octahedrons */}
      <FloatingWireframe
        position={[-5, 4.5, -7]}
        scale={1.8}
        speed={0.18}
        geometry="octahedron"
        color="#f97316"
        opacity={0.2}
        floatAmplitude={0.6}
      />
      <FloatingWireframe
        position={[8, -3.5, -13]}
        scale={2.5}
        speed={0.08}
        geometry="octahedron"
        color="#f97316"
        opacity={0.12}
        floatAmplitude={0.35}
      />

      {/* Icosahedrons */}
      <FloatingWireframe
        position={[3.5, -4.5, -8]}
        scale={1.6}
        speed={0.1}
        geometry="icosahedron"
        color="#ffc962"
        opacity={0.18}
        floatAmplitude={0.45}
      />
      <FloatingWireframe
        position={[-8.5, 1.5, -10]}
        scale={2.2}
        speed={0.07}
        geometry="icosahedron"
        color="#ffaa44"
        opacity={0.14}
        floatAmplitude={0.5}
      />

      {/* Particles */}
      <Particles count={90} />
    </>
  );
}

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
