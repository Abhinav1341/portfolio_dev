import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Globe from "react-globe.gl";
import Loader from "../components/Loader";
import Grid1 from "../assets/images/grid1.svg";
import Grid2 from "../assets/images/grid2.png";
import Grid3 from "../assets/images/grid3.png";
import Grid4 from "../assets/images/grid4.png";
import Tick from "../assets/images/tick.svg";
import Copy from "../assets/images/copy.svg";
import { Link } from "react-router-dom";
import Sky from "../models/Sky";
import Iconcloud from "../components/IconCloud";
import Keyboard from "../models/Keyboard";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("abhinavsinghhg@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="absolute my-20 mx-3 z-10 md:mx-8 lg:mx-28">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-6 h-full">
        <div className=" border-black col-span-1 xl:row-span-3">
          <div className="grid-container flex flex-col items-center justify-center">
            <img
              src={Grid1}
              alt="grid-1"
              className="sm:w-[340px] h-fit object-contain"
            />
            <div>
              <p className="font-worksans pb-2 font-bold text-emerald-800 text-xl">
                Hey there, this is Abhinav!
              </p>
              <p className="grid-subtext font-medium pb-1">
                With 2+ Years of Experience in Web Development, I have honed my
                skills in both frontend and backend.
              </p>
              <p className="grid-subtext font-medium">
                Currently Pursuing BTech in Electronics and Communication
                Department, NIT Patna.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items center overflow-hidden">
              <Globe
                backgroundColor="rgba(0,0,0,0)"
                height={360}
                width={360}
                backgroundImageOpacity="0.4"
                showAtmosphere
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="font-worksans pb-1 font-bold text-emerald-800 text-xl"></p>
              <Link
                to="/cc"
                className="my-2 py-3 w-3/4 font-semibold text-xl font-worksans text-gray-100 text-center bg-zinc-700 hover:bg-zinc-600 cursor-pointer animate-in rounded-xl"
              >
                Contact Me Here
              </Link>
            </div>
            {/* <Iconcloud />
            <div>
              <p className="font-worksans pb-1 font-bold text-emerald-800 text-xl">
                Tech Stack
              </p>
              <p className="grid-subtext font-medium">
                JS and TS, and other things, to be listed later...
              </p>
            </div> */}
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <Iconcloud />
            <div>
              <p className="font-worksans pb-1 font-bold text-emerald-800 text-xl">
                Tech Stack
              </p>
              <p className="grid-subtext font-medium">
                JS and TS, and other things, to be listed later...
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <Canvas camera={{ near: 0.1, far: 1000 }}>
              <Keyboard />
              <ambientLight intensity={2} />
            </Canvas>

            {/* <img src={Grid3} className="w-full sm:h-[266px] object-contain" /> */}
            <div>
              <p className="font-worksans pb-1 font-bold text-emerald-800 text-xl">
                I have a Passion for Coding
              </p>
              <p className="grid-subtext font-medium">
                I love solving problems and building things. Coding is my way to
                express myself and is definetly my passion
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container ">
            <img
              src={Grid4}
              alt="grid4"
              className="w-full sm:h-[216px] md:h-[156px] h-fit object-cover sm:object-top "
            />
            <div className=" space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? Tick : Copy}
                  alt="copy"
                  className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent"
                />
                <p className="lg:text-lg px-1 md:text-base font-medium text-gray_gradient text-emerald-900 font-worksans">
                  abhinavsinghhg@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
