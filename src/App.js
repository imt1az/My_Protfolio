import React from 'react';
import About from './Components/About';
import Brand from './Components/Brand';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Skills from './Components/Skills';

// import components

const App = () => {
  return <div>
    <Header></Header>
    <Hero></Hero>
    <Brand></Brand>
    <About></About>
    <Skills></Skills>
    <div style={{height:'2000px'}}></div>
  </div>;
};

export default App;
