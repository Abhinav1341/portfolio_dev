import React from "react";
import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-3 border-opacity-25 border-emerald-500 border-t-emerald-500 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;
