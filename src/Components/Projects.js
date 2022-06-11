import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from '../data';
import Project from './Project';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [item,setItem] = useState({name:'all'})
    const [projects,setProjects] = useState([]);
    const [active,setActive] = useState(0);
    const [projectDes,setProjectDes] = useState(null);
    if(!projectDes){
        console.log(projectDes)
    }
    useEffect(()=>{
        if(item.name === 'all'){
            setProjects(projectsData)
        }
        else{
            const newProjects = projectsData.filter((project)=> {
                return project.category.toLowerCase() === item.name
            })
            setProjects(newProjects);
        }
    },[item])

    const handleClick = (e,index)=>{
        setItem({name:e.target.textContent.toLowerCase()});
        setActive(index)
    }
    return (
        <div>
            <nav className='mb-12 max-w-xl mx-auto'>
                <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
                    {
                        projectsNav.map((item,index)=>{
                            return <li onClick={(e)=>handleClick(e,index)} key={index}
                            className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4`}
                            >{item.name}</li>
                        })
                    }
                </ul>
            </nav>
            <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-10 lg:gap-y-10'>
                {
                    projects.map(item=>{
                        return <Project item = {item} setProjectDes={setProjectDes} key={item.id}></Project>
                    })
                }
            </section>
            {
                projectDes && <ProjectModal key={projectDes.id} projectDes={projectDes} setProjectDes={setProjectDes}></ProjectModal>
            }
        </div>
    );
};

export default Projects;