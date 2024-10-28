import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Swiper CSS
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
import Dairyn from '../../shopify/src/Names/Dairy';
import Snacks from '../../shopify/src/Components/Cards/Snacks';
import SnacksData from '../../shopify/src/Components/Cards/SnacksData';
import Snacksn from './Names/Snacksn';
import Coldrinksn from './Names/Coldrinksn';
import Coldrink from '../../shopify/src/Components/Cards/Coldrink';
import ColdrinkData from '../../shopify/src/Components/Cards/ColdrinkData';



import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// Import Swiper core and required modules from 'swiper/modules'
import { Navigation } from 'swiper/modules';


const App = () => {
  return (
    <>
      <Header />
      <Banner />

      {/* Top Banner Images */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        {Topbannerdata.map((data, index) => (
          <Topbanner key={index} imgsrc={data.imgsrc} index={index} />
        ))}
      </div>

      {/* Categories Section */}
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

   <Dairyn />      
      {/* Swiper Carousel for Dairy Products */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        spaceBetween={0}
        slidesPerView={6}
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
        
        {/* Custom navigation buttons with icons */}
        <div className="swiper-button-prev-custom" style={{ ...styles.navButton, left: '10px' }}>
          <FaArrowLeft />
        </div>
        <div className="swiper-button-next-custom" style={{ ...styles.navButton, right: '10px' }}>
          <FaArrowRight />
        </div>
      </Swiper>
  <br />
      <Snacksn />

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        spaceBetween={0}
        slidesPerView={6}
        style={{ padding: '23px' }}
      >
        {SnacksData.map((data, index) => (
          <SwiperSlide key={index}>
            <Snacks 
              imgsrc={data.imgsrc} 
              title={data.title} 
              desc={data.desc} 
              mrp={`₹ ${data.mrp}`} 
              btn={data.btn} 
            />
          </SwiperSlide>
        ))}
        
        {/* Custom navigation buttons with icons */}
        <div className="swiper-button-prev-custom" style={{ ...styles.navButton, left: '10px' }}>
          <FaArrowLeft />
        </div>
        <div className="swiper-button-next-custom" style={{ ...styles.navButton, right: '10px' }}>
          <FaArrowRight />
        </div>
      </Swiper>

      <br />

      <Coldrinksn />


      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        spaceBetween={0}
        slidesPerView={6}
        style={{ padding: '23px' }}
      >
        {ColdrinkData.map((data, index) => (
          <SwiperSlide key={index}>
            <Coldrink 
              imgsrc={data.imgsrc} 
              title={data.title} 
              desc={data.desc} 
              mrp={`₹ ${data.mrp}`} 
              btn={data.btn} 
            />
          </SwiperSlide>
        ))}
        
        {/* Custom navigation buttons with icons */}
        <div className="swiper-button-prev-custom" style={{ ...styles.navButton, left: '10px' }}>
          <FaArrowLeft />
        </div>
        <div className="swiper-button-next-custom" style={{ ...styles.navButton, right: '10px' }}>
          <FaArrowRight />
        </div>
      </Swiper>



    </>
  );
};

// Styles for custom navigation buttons
const styles = {
  navButton: {
    color: '#198754',
    fontSize: '24px',
    position: 'absolute',
    top: '50%',
    zIndex: 10,
    cursor: 'pointer',
    transform: 'translateY(-50%)',
  },
};

export default App;
