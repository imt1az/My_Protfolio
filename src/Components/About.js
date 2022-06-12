import React from "react";
import Image from "../assets/img/about.webp";
import Professional from '../assets/img/Professional.jpg'
const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[466px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Professional}
            alt=""
          ></img>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2
                className="text-2xl lg:text-4xl font-medium lg:font-extrabold mb-3
                               before:content-about  relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block
                               "
                          >
                Imtiaz Ahmed Chowdhury
              </h2>
              <p className="mb-4 text-white">Web Developer</p>
              <hr className="mb-8 opacity-5"></hr>
              <p className="mb-8 lg:text-justify text-justify ">
               Hello,my name is Imtiaz Ahmed Chowdhury. I have been performing as Full-Stack web developer and am still in the process of gainning experience.
               My educational background possesses a Bachelor Of Science In Computer Science and Engineering.I am also dedicated to my work that my own created
               websites ended with gainning lots of response and fame. I give my best to any work regarding this field. I have experience like Javascript,Node Js,
                MongoDb, React, Php, Laravel, MySql,Html,Css,
              Bootstrap and i can solve problem analytically.
              </p>
            </div>
            <button className="btn btn-md bg-gray-400 hover:bg-yellow-100-hover transition-all text-white">
            <a href="#contact">Contact me</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
