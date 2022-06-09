import React from 'react';
import {skills} from '../data'
const Skills = () => {
    return (
       <section className='min-h-[146px] bg-tertiary flex items-center py-12'>
             <div className='container mx-auto flex  md:justify-between items-center'>
                  {
                      skills.map((skill,index)=>{
                          return (
                              <div key={index}>
                                  <img src={skill.image} alt=''></img>
                              </div>
                          )
                      })
                  }
             </div>
       </section>
    );
};

export default Skills;