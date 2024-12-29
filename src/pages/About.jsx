import React from "react";
import Globe from "react-globe.gl";
import Grid1 from "../assets/images/grid1.png";
import Grid2 from "../assets/images/grid2.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-6 h-full">
        <div className=" border-black col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={Grid1}
              alt="grid-1"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className=" font-worksans font-semibold text-white text-xl">
                Hey there, this is Abhinav!
              </p>
              <p className="grid-subtext">
                With 2+ Years of Experience in Web Development, I have honed my
                skills in both frontend and backend.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            {/* CHANGE THIS IMAGE LATER... */}
            <img
              src={Grid2}
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="font-worksans font-semibold text-white text-xl">
                Tech Stack
              </p>
              <p className="grid-subtext">
                JS and TS, and other things, to be listed later...
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items center overflow-hidden">
              <Globe
                backgroundColor="rgba(0,0,0,0)"
                htmlLat={45}
                htmlLng={37}
                objectRotation={[12111111, 211122, 3211113]}
                height={360}
                width={360}
                backgroundImageOpacity="0.4"
                showAtmosphere
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-worksans font-semibold text-white text-xl">
                I am based in India...
              </p>
              <p className="grid-subtext">
                Currently Pursuing BTech in Electronics and Communication
                Department, NIT Patna. Reach out to me, if I can help you in any
                way.
              </p>
              <Link
                to="/cc"
                className="w-full my-3 py-3 font-semibold text-xl font-worksans text-gray-900 text-center bg-slate-50 rounded-xl"
              >
                Contact Me Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
