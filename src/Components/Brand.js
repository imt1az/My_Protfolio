import React from 'react';
import { brands } from '../data';

const Brand = () => {
    return (
        <section className='min-h-[146px] bg-tertiary flex items-center'>
          {/* <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'>
                {
                    brands.map((brand,index)=>{
                        return (
                            <div key={index}>
                               <img src={brand.img} alt=''></img>
                            </div>
                        )
                    })
                }
          </div> */}
        </section>
    );
};

export default Brand;