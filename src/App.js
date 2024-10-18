import React from 'react';
import Header from "./Components/Header";
import HeaderCat from './Components/HeaderCat';
import Footer from './Components/Footer';
import FeaturedCat from './Components/FeaturedCat';

const App = () =>{
  return(
    <>
        <Header />
        <HeaderCat />
        <FeaturedCat />
     
        <Footer />
    </>
  );
};

export default App;