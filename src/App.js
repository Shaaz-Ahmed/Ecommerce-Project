import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Updated CSS import
import 'swiper/css/navigation';  // For navigation buttons
import 'swiper/css/pagination';  // For pagination

import Header from "./Components/Header";
import Banner from './Components/Banner';
import Topbanner from './Components/Topbanner';
import Topbannerdata from './Components/Topbannerdata';
import Categories from './Components/Categories';
import CategoriesData from './Components/CategoriesData';
import CategoriesData1 from './Components/CategoriesData1';
import Categories1 from "./Components/Categories1";
import Dairy from "../../shopify/src/Components/Cards/Dairy";
import DairyData from "./Components/Cards/DairyData";

// Import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      {/* div for showing the 3 banner image in same line */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        {Topbannerdata.map((data, index) => (
          <Topbanner key={index} imgsrc={data.imgsrc} index={index} />
        ))}
      </div>

      <h5 style={{ marginLeft: '60px' }}>Categories</h5>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        {CategoriesData.map((data, index) => (
          <Categories key={index} imgsrc={data.imgsrc} index={index} />
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        {CategoriesData1.map((data, index) => (
          <Categories1 key={index} imgsrc={data.imgsrc} index={index} />
        ))}
      </div>
      
      {/* Swiper Carousel for Dairy Products */}
      <Swiper
  modules={[Navigation]}
  navigation={{
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  }}
  spaceBetween={0}
  slidesPerView={6} // Adjust this to control how many cards to show at a time
  style={{ padding: '23px' }}
>
  {DairyData.map((data, index) => (
    <SwiperSlide key={index}>
      <Dairy 
        imgsrc={data.imgsrc} 
        title={data.title} 
        desc={data.desc} 
        mrp={`₹ ${data.mrp}`} 
        btn={data.btn} 
      />
    </SwiperSlide>
  ))}
  {/* Custom navigation buttons */}
  <div className="swiper-button-prev-custom"></div>
  <div className="swiper-button-next-custom"></div>
</Swiper>

    </>
  );
};

export default App;
