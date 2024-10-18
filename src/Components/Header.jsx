import React from 'react';
import logo from '../assets/images/logo.png';

const MyHeader = ()=>{
    return(
        <>
            <div className='container'>
                {/* Row starting */}
                    <div className='row mt-2'>  
                    <div className="col-2" style={{ backgroundColor: '' }}>
                        <img src={logo}/>
                     </div>
                    </div>

            </div> 
            {/* row ending */}
        </>
    )
};

export default MyHeader;