import React from 'react';
import ProjectModal from './ProjectModal';

const Project = ({item,projectDes,setProjectDes}) => {
    return (
        <div key={item.id} className='flex flex-col items-center text-center'>
             <div className='mb-2'>
                 <img className='rounded-2xl h-[480px] lg:w-[300px]' src={item.image} alt=''></img>
             </div>
             <p className='capitalize text-accent text-sm mb-2'>{item.category}</p>
             <h3 className='text-xl font-medium capitalize mb-2'>{item.name}</h3>
             {/* <label for="product-detail" className="btn modal-button btn-xs lg:w-1/2 rounded-full bg-accent hover:bg-accent-hover transition-all ">
               Details
            </label> */}
          <label onClick={()=>setProjectDes(item)} for="project-details" className="btn modal-button">Detail</label>
           
           
        </div>
    );
};

export default Project;