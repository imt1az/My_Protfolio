import React, { useEffect, useState } from 'react';
import Logo from '../assets/img/MyLogo.png'
import Nav from './Nav';
import NavMobile from './NavMobile';
import Social from './Social';
const Header = () => {
    const [bg,setBg] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        })
    })
    return (
        <header className={`${bg ? 'bg-tertiary h-20' : 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
            <div className='container mx-auto h-full flex items-center justify-between'>
               <a href='#'>
                   <img className='w-30 h-12 rounded' src={Logo} alt='' ></img>
               </a>
               <div className='hidden lg:block'>
                   <Nav></Nav>
               </div>
               {/* Social */}
               <div className='hidden lg:block'>
                   <Social></Social>
               </div>

               {/* Nav Mobile */}
               {/* <div className=' lg:hidden'>
                  <NavMobile></NavMobile>
               </div> */}
               <div className='lg:hidden'>
                  <NavMobile></NavMobile>
               </div>
            </div>
        </header>
    );
};

export default Header;