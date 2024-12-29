import { useRef, useEffect } from "react";
import BirdS from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
  const { scene, animations } = useGLTF(BirdS);
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);

  useFrame(({ clock, camera }) => {
    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.1 - 0.8;

    if (ref.current.position.x > camera.position.x + 10) {
      ref.current.rotation.y = Math.PI;
    } else if (ref.current.position.x < camera.position.x - 10) {
      ref.current.rotation.y = 0;
    }

    if (ref.current.rotation.y === 0) {
      ref.current.position.x += 0.02;
      ref.current.position.z -= 0.004;
    } else {
      ref.current.position.x -= 0.02;
      ref.current.position.z += 0.004;
    }
  });

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  return (
    <mesh position={[-4, -4, -1]} scale={[0.002, 0.002, 0.002]} ref={ref}>
      <primitive object={scene}></primitive>
    </mesh>
  );
};

export default Bird;
