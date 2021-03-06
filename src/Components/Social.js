import React from 'react';
import { social } from '../data';

const Social = () => {
    return <ul className='flex space-x-6'>
         {
             social.map((item,index)=>{
                 return <li className='flex justify-center items-center text-white ' key={index}>
                     <a className=' text-2xl' target='_blank' href={item.href}>{item.icon}</a>  
                 </li>
             })
         }
    </ul>
};

export default Social;