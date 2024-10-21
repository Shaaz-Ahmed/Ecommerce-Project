import React from 'react';
import Header from "./Components/Header";
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Topbanner from './Components/Topbanner';

const App = () =>{
  return(
    <>
        <Header />
        {/* <Navbar />  */}
        <Banner />
        <Topbanner />
        <br /><br />
        <Footer />
    </>
  );
};

export default App;