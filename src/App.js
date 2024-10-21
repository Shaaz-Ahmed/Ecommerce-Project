import React from 'react';
import Header from "./Components/Header";
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Topbanner from './Components/Topbanner';
// import Navbar from './Components/Navbar';

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