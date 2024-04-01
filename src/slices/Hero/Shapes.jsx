import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Shapes() {
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <Geometries />
          {/*
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.2}
            scale={40}
            blur={5}
            far={9}
          />*/}
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Geometries() {
  const geometries = [
    {
      position: [0, 0, 0],
      rate: 0.3,
      geometry: new THREE.IcosahedronGeometry(3),
    },
    {
      position: [1, -0.75, 4],
      rate: 0.4,
      geometry: new THREE.CapsuleGeometry(0.5, 1.6, 2, 16),
    },
    {
      position: [-1.4, 2, -4],
      rate: 0.6,
      geometry: new THREE.DodecahedronGeometry(1.5),
    },
    {
      position: [-0.8, -0.75, 5],
      rate: 0.5,
      geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32),
    },
    {
      position: [1.6, 1.6, -4],
      rate: 0.7,
      geometry: new THREE.OctahedronGeometry(1.5),
    },
  ];

  const materials = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({ color: 0xfefedf, roughness: 0 }),
    new THREE.MeshStandardMaterial({
      color: 0x845ec2,
      roughness: 0.4,
      metalness: 0.3,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x2c73d2,
      roughness: 0.1,
      metalness: 0.3,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x0081cf,
      roughness: 0.1,
      metalness: 0.3,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x0089ba,
      roughness: 0.1,
      metalness: 0.3,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x4b4453,
      roughness: 0.1,
      metalness: 0.3,
    }),
  ];

  const sfx = [
    new Audio("/Sounds/Audio1.ogg"),
    new Audio("/Sounds/Audio2.ogg"),
    new Audio("/Sounds/Audio3.ogg"),
  ];

  return geometries.map(({ position, rate, geometry }) => (
    <Geometry
      key={JSON.stringify(position)}
      position={position.map((p) => p * 2)}
      geometry={geometry}
      materials={materials}
      rate={rate}
      sfx={sfx}
    />
  ));
}

function Geometry({ rate, position, geometry, materials, sfx }) {
  const meshRef = useRef();

  useEffect(() => {
    gsap.from(meshRef.current.position, {
      x: 0,
      y: 0,
      z: 0,
      scale: 0,
      duration: 1,
      ease: "elastic.out(1,0.3)",
      delay: 0.3,
    });
  }, []);

  const handleClick = () => {
    gsap.to(meshRef.current.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });
    meshRef.current.material = getRandomMaterial();
    gsap.utils.random(sfx).play();
  };

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  const getRandomMaterial = () => {
    return gsap.utils.random(materials);
  };

  return (
    <group position={position}>
      <Float
        speed={5 * rate}
        rotationIntensity={6 * rate}
        floatIntensity={5 * rate}
      >
        <mesh
          ref={meshRef}
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={true}
          material={getRandomMaterial()}
        />
      </Float>
    </group>
  );
}
