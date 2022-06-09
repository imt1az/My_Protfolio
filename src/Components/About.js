import React from "react";
import Image from "../assets/img/about.webp";
const About = () => {
  return (
    <section className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          ></img>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2
                className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3
                               before:content-about  relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block
                               "
                          >
                Imtiaz
              </h2>
              <p className="mb-4 text-accent">Freelance Web Developer</p>
              <hr className="mb-8 opacity-5"></hr>
              <p className="mb-8">
                You can also use variant modifiers to target media queries like
                responsive breakpoints, dark mode, prefers-reduced-motion, and
                more. For example, use md:before:content-['Desktop'] to apply
                the before:content-['Desktop'] utility at only medium screen
                sizes and above.
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
               Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
