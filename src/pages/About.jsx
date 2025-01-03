import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Globe from "react-globe.gl";
import Grid1 from "../assets/images/grid1.svg";
import Grid4 from "../assets/images/grid4.png";
import email from "../assets/images/email.png";
import sky from "../assets/images/Sky-2.jpg";
import Tick from "../assets/images/tick.svg";
import Copy from "../assets/images/copy.svg";
import { Link } from "react-router-dom";
import Iconcloud from "../components/IconCloud";
import Keyboard from "../models/Keyboard";

const About = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("abhinavsinghhg@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <div className="relative">
      <div className=" inset-0 overflow-hidden">
        <img
          src={sky}
          alt="bcg"
          style={{
            transform: `translateY(${offsetY * -0.05}px)`,
          }}
          className="fixed opacity-90 w-full h-[120vh] object-cover left-0 bottom-0 top-0"
        />
      </div>
      <section className="relative z-20 my-20 mx-3 md:mx-8 lg:mx-28">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-6 h-full">
          <div className=" hover:scale-[1.03] hover:opacity-95 transition-all border-black col-span-1 xl:row-span-3">
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
                  With 2+ Years of Experience in Web Development, I have honed
                  my skills in both frontend and backend.
                </p>
                <p className="grid-subtext font-medium">
                  Currently Pursuing BTech in Electronics and Communication
                  Department, NIT Patna.
                </p>
              </div>
            </div>
          </div>
          <div className=" hover:scale-[1.03] hover:opacity-95 transition-all col-span-1 xl:row-span-3">
            <div className="grid-container">
              <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items center overflow-hidden">
                <Globe
                  backgroundColor="rgba(0,0,0,0)"
                  height={360}
                  width={360}
                  backgroundImageOpacity="0.4"
                  showAtmosphere
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-worksans pb-1 font-bold text-emerald-800 text-xl"></p>
                <Link
                  to="/cc"
                  className="my-2 py-3 w-3/4 text-xl font-worksans border border-emerald-900 font-bold hover:text-white text-slate-50 text-center bg-emerald-400 hover:bg-emerald-500 cursor-pointer transition-all rounded-xl"
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
          <div className=" hover:scale-[1.03] hover:opacity-95 transition-all col-span-1 xl:row-span-4">
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
          <div className=" hover:scale-[1.03] hover:opacity-95 transition-all xl:col-span-2 xl:row-span-3">
            <div className="grid-container">
              <Canvas camera={{ near: 0.1, far: 1000 }}>
                <Keyboard />
                <spotLight
                  position={[0, 9, 5]}
                  intensity={500}
                  color="#62D1BC"
                />
                <ambientLight intensity={0.05} />
                {/* <ambientLight intensity={2} /> */}
              </Canvas>

              {/* <img src={Grid3} className="w-full sm:h-[266px] object-contain" /> */}
              <div>
                <p className="font-worksans pb-1 font-bold text-emerald-800 text-xl">
                  I have a Passion for Coding
                </p>
                <p className="grid-subtext font-medium">
                  I love solving problems and building things. Coding is my way
                  to express myself and is definetly my passion
                </p>
              </div>
            </div>
          </div>
          <div className=" hover:scale-[1.03] hover:opacity-95 transition-all xl:col-span-1 xl:row-span-2">
            <div className="grid-container ">
              <img
                src={email}
                alt="grid4"
                className="sm:h-[196px] md:h-[176px] h-[156px] object-contain sm:object-top "
              />
              <div className="space-y-2">
                <p className="grid-subtext text-xl text-center">Contact Me</p>
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
    </div>
  );
};
export default About;
