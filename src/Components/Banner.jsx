import React from 'react';
import banner from '../assets/images/pan.webp';
import '../index.css'; // Assuming you have a global CSS file

const Banner = () => {
    return (
        <>
            <div className=''>
                <div className='row'>
                    <div className='col-12 mt-2'> {/* Ensure it takes the full width */}
                        <img src={banner} alt='banner' className='banner-image'/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;