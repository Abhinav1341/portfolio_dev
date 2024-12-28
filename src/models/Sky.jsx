import { useGLTF } from "@react-three/drei";
import skyScene from "../assets/3d/sky.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating }) => {
  const ref = useRef();
  const sky = useGLTF(skyScene);

  useFrame((_, change) => {
    if (isRotating) {
      ref.current.rotation.y += 0.12 * change;
    }
  });

  return (
    <mesh ref={ref}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
