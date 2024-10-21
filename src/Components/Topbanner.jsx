import React from 'react';
import Pharmacy from '../assets/images/Pharmacy-banner.avif';

const Topbanner = () =>{
    return(
        <>
            <div className='container'>
                <div className='row'>
                    <img src={Pharmacy} alt=''/>
                </div>
            </div>
        </>
    )
};

export default Topbanner;