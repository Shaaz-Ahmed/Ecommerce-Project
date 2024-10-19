import React from 'react';
import Header from "./Components/Header";
import HeaderCat from './Components/HeaderCat';
import Footer from './Components/Footer';
import FeaturedCat from './Components/FeaturedCat';
import Slider from './Components/Slider';

const App = () =>{
  return(
    <>
        <Header />
        <HeaderCat />
        <Slider />
        <br /><br />
        <FeaturedCat />
        <Footer />
    </>
  );
};

export default App;