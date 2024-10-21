import React from 'react';
import Pharmacy from '../assets/images/Pharmacy-banner.png';

const Topbanner = () =>{
    return(
        <>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-3 one'>
                    <img src={Pharmacy} alt=''/>
                    </div>
                    
                </div>
            </div>
        </>
    )
};

export default Topbanner;