import React from "react";
import IconCloud from "../../components/ui/icon-cloud";

const Iconcloud = () => {
  const slugs = [
    "typescript",
    "jupyter",
    "pytorch",
    "javascript",
    "framer",
    "threedotjs",
    "java",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "amazonaws",
    "firebase",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "figma",
    "python",
    "c",
    "c++",
    "googlecloud",
    "pycharm",
    "tailwindcss",
  ];
  return (
    <div className="px-8 my-0">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};

export default Iconcloud;
