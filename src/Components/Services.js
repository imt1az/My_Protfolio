import React from "react";
import { services } from "../data";

const Services = () => {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2
            className="section-title before:content-services relative before:absolute before:opacity-40
                 before:-top-[2rem] before:-left-20 before:hidden before:lg:block"
          >
            What I do for my clients
          </h2>
          <p className="subtitle">
            I always wanted to see my clients happy with my work. I give my best output for 
            my clients who are trusted me and give me their valuable time and task.And i always fulfill my duties.
          </p>
          
        </div>
        <div className="grid lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const { icon, name, description } = service;
              return <div className="bg-secondary p-6 rounded-2xl" key={index}>
                <div className="text-yellow-100  flex justify-center mb-2 items-center text-[28px]">
                  {icon}
                </div>
                <h4 className="text-xl text-center font-medium mb-2">
                       {name}
                  </h4>
                  
              </div>;
            })}
          </div>
      </div>
    </section>
  );
};

export default Services;
