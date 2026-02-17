"use client";

import { useRef, useMemo, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// --- Config ---
const PARTICLE_COUNT = 220;
const INTERACT_RADIUS = 2.5;
const PUSH_STRENGTH = 0.05;
const PUSH_DAMPING = 0.88;
const BOUNDS_X = 16;
const BOUNDS_Y = 13;

// Mouse in world-ish coordinates
const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

function MouseTracker() {
  const { size, camera } = useThree();

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      // Convert screen coords to world coords at the average particle depth (z ≈ -5)
      const ndcX = (e.clientX / size.width) * 2 - 1;
      const ndcY = -(e.clientY / size.height) * 2 + 1;
      const vec = new THREE.Vector3(ndcX, ndcY, 0.5);
      vec.unproject(camera);
      vec.sub(camera.position).normalize();
      // Project ray to z = -5 (average particle depth) instead of z = 0
      const targetZ = -5;
      const distance = (targetZ - camera.position.z) / vec.z;
      const worldPos = camera.position
        .clone()
        .add(vec.multiplyScalar(distance));
      mouse.targetX = worldPos.x;
      mouse.targetY = worldPos.y;
    },
    [size.width, size.height, camera],
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  useFrame(() => {
    mouse.x += (mouse.targetX - mouse.x) * 0.08;
    mouse.y += (mouse.targetY - mouse.y) * 0.08;
  });

  return null;
}

function Particles({ count = 150 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const { positions, driftVelocities, pushVelocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const driftVelocities = new Float32Array(count * 2); // constant drift per particle (x, y)
    const pushVelocities = new Float32Array(count * 2); // mouse push (x, y)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * BOUNDS_X * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * BOUNDS_Y * 2;
      positions[i * 3 + 2] = Math.random() * -8 - 1;

      // Each particle drifts in a random direction at a slow, steady speed
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.006 + 0.002;
      driftVelocities[i * 2] = Math.cos(angle) * speed;
      driftVelocities[i * 2 + 1] = Math.sin(angle) * speed;

      pushVelocities[i * 2] = 0;
      pushVelocities[i * 2 + 1] = 0;
    }
    return { positions, driftVelocities, pushVelocities };
  }, [count]);

  const colors = useMemo(() => {
    const colors = new Float32Array(count * 3);
    const golden = new THREE.Color("#ffc962");
    const warm = new THREE.Color("#ffb347");
    const orange = new THREE.Color("#f97316");

    for (let i = 0; i < count; i++) {
      const t = Math.random();
      const color =
        t < 0.6
          ? golden.clone().lerp(warm, t / 0.6)
          : warm.clone().lerp(orange, (t - 0.6) / 0.4);

      const brightness = Math.random() * 0.5 + 0.5;
      colors[i * 3] = color.r * brightness;
      colors[i * 3 + 1] = color.g * brightness;
      colors[i * 3 + 2] = color.b * brightness;
    }
    return colors;
  }, [count]);

  useFrame(() => {
    if (!points.current) return;
    const posAttr = points.current.geometry.attributes.position;
    if (!posAttr) return;
    const pos = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const pvx = i * 2;
      const pvy = i * 2 + 1;

      // Mouse repulsion
      const dx = pos[ix]! - mouse.x;
      const dy = pos[iy]! - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < INTERACT_RADIUS && dist > 0.01) {
        const force = (1 - dist / INTERACT_RADIUS) * PUSH_STRENGTH;
        pushVelocities[pvx] = pushVelocities[pvx]! + (dx / dist) * force;
        pushVelocities[pvy] = pushVelocities[pvy]! + (dy / dist) * force;
      }

      // Dampen push velocity so particles settle back quickly
      pushVelocities[pvx] = pushVelocities[pvx]! * PUSH_DAMPING;
      pushVelocities[pvy] = pushVelocities[pvy]! * PUSH_DAMPING;

      // Move: constant drift + mouse push
      pos[ix] = pos[ix]! + driftVelocities[pvx]! + pushVelocities[pvx]!;
      pos[iy] = pos[iy]! + driftVelocities[pvy]! + pushVelocities[pvy]!;

      // Wrap around edges
      if (pos[ix]! > BOUNDS_X) pos[ix] = -BOUNDS_X;
      if (pos[ix]! < -BOUNDS_X) pos[ix] = BOUNDS_X;
      if (pos[iy]! > BOUNDS_Y) pos[iy] = -BOUNDS_Y;
      if (pos[iy]! < -BOUNDS_Y) pos[iy] = BOUNDS_Y;
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.09}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <MouseTracker />
      <Particles count={PARTICLE_COUNT} />
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
