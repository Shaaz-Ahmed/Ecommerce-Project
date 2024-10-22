import React from 'react';
import Paan from '../assets/images/Paan-corner.avif';

const Categories = () =>{
    return(
        <>
            <div className='categories'>
                <div className='cat-img'>
                    <div className='row'>
                        <div className='col-1'>
                        <img src={Paan} alt='paan-photo'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Categories;