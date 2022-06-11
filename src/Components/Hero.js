import React from "react";
import { Link } from "react-scroll";
import WomenImg from "../assets/img/banner-woman2.webp";
import Me from "../assets/img/MyImage.JPG";
const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-slate-900 lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* Left */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[22px]">
              Hey, i'm Imtiaz Ahmed Chowdhury{" "}
            </p>
            <h1 className="text-4xl md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] leading-[44px] mb-3">
              I Build & Design <br />
              Web Apps
            </h1>
            
            <button
             
              className="btn btn-md bg-accent hover:bg-accent-hover
                        md:btn-lg transition-all"
            >
              <a href="#contact" className="text-white"> Work with me</a>
            </button>
          </div>
          {/* right */}
          <div className="hidden lg:flex flex-1 justify-end items-center h-full w-full p-10 rounded-full">
            <img src={Me} alt=""></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
