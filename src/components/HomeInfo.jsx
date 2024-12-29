import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const Info = ({ text, btnText, link }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

const textContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center py-4 px-8 text-white mx-5 neo-brutalism-blue">
      Hey, I am Abhinav👋 <br />
      Upcoming Software Engineer from India.
    </h1>
  ),
  2: (
    <Info
      text="I am currently pursuing BTech in Electroincs and Communication Department at NIT Patna"
      link="/a"
      btnText="Learn More"
    ></Info>
  ),
  3: (
    <Info
      text="Led and Built a bunch of projects throughout the years."
      link="/p"
      btnText="Projects"
    ></Info>
  ),
  4: (
    <Info
      text="Solving DSA and participating in contests a lot."
      link="/c"
      btnText="Coding Profile"
    ></Info>
  ),
  5: (
    <Info
      text="Good Morning, Good Evening, Good Night!"
      link="/cc"
      btnText="Let's Talk"
    ></Info>
  ),
};

const HomeInfo = ({ currentStage }) => {
  return textContent[currentStage] || null;
};

export default HomeInfo;
