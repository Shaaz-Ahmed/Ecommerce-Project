import React from 'react';
import Header from "./Components/Header";
import Banner from './Components/Banner';
import Topbanner from './Components/Topbanner';
import Topbannerdata from './Components/Topbannerdata';

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      {/* Flexbox layout for images */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        {Topbannerdata.map((data, index) => (
          <Topbanner key={index} imgsrc={data.imgsrc} index={index} />
        ))}
      </div>
    </>
  );
};

export default App;
