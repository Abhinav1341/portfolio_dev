import {
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Grid,
} from "@react-three/drei";
import { useRef } from "react";

import KeyboardSc from "../assets/3d/keyboard.glb";

const Keyboard = () => {
  const ref = useRef();
  const { scene } = useGLTF(KeyboardSc);
  const changeScale = () => {
    let screenScale = [0.064, 0.064, 0.064];
    if (window.innerWidth < 768) {
      screenScale = [0.05, 0.05, 0.05];
    }
    return screenScale;
  };
  const Kscale = changeScale();

  return (
    <>
      <PerspectiveCamera makeDefault position={[-1.1, 6, 4]} fov={70} />
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        target={[-0.3, -1, 0]}
        maxDistance={10}
        minDistance={2}
      />
      <mesh ref={ref} position={[0, 0, -1]} scale={Kscale}>
        <primitive object={scene} />
      </mesh>
    </>
  );
};

export default Keyboard;
