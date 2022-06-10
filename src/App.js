import React from 'react';
import About from './Components/About';
import Brand from './Components/Brand';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';

import Skills from './Components/Skills';
import Testimonial from './Components/Testimonial';

// import components

const App = () => {
  return <div className='bg-white relative'>
    <Header></Header>
    <Hero></Hero>
    <Brand></Brand>
    <About></About>
    <Skills></Skills>
    <Portfolio></Portfolio>
    <Services></Services>
    <Testimonial></Testimonial>
    <Contact></Contact>
    <Footer></Footer>
   
  </div>;
};

export default App;
