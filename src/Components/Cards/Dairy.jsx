import React from 'react';
import dairy from '../../assets/images/Cards/cowmilk.avif';

const Dairy = () =>{
    return(
        <>
            <div className='card' style={{width:'11rem'}}>
                <img src={dairy} alt='dariy image'/>

            </div>
        </>
    );
};

export default Dairy;