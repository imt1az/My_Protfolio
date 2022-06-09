import React from 'react';
import Brand from './Components/Brand';
import Header from './Components/Header';
import Hero from './Components/Hero';

// import components

const App = () => {
  return <div>
    <Header></Header>
    <Hero></Hero>
    <Brand></Brand>
    <div style={{height:'2000px'}}></div>
  </div>;
};

export default App;
