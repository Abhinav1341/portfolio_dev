import React from "react";
import { MyProjects } from "../assets/AssetExp";
import S1 from "../assets/images/spotlight1.png";
import L1 from "../assets/images/project-logo1.png";

const Projects = () => {
  return (
    <section className="my-24 mx-7 md:mx-8 lg:mx-32">
      <p className=" font-semibold lg:text-4xl text-2xl">My Works</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-gray-400">
          <div className="absolute top-0 right-0">
            <img
              className="w-full h-96 object-cover rounded-xl"
              alt="spotlight"
              src={S1}
            ></img>
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-xl"
            style={MyProjects[0].logoStyle}
          >
            <img src={L1} alt="logo" className="h-10 w-10 shadow-sm"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
