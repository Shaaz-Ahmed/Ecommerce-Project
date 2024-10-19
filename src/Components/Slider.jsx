import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../index.css';
import mbanner1 from '../assets/images/mbanner1.webp';
import mbanner2 from '../assets/images/mbanner2.webp';
import wbanner1 from '../assets/images/wbanner1.webp';

const Slider = () => {
    return (
        <AwesomeSlider className="slider">
            <div className="d-flex justify-content-center align-items-center">
                <img src={mbanner1} className="slider-image" alt="Banner 1" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <img src={mbanner2} className="slider-image" alt="Banner 2" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <img src={wbanner1} className="slider-image" alt="Banner 3" />
            </div>
        </AwesomeSlider>
    );
};

export default Slider;
