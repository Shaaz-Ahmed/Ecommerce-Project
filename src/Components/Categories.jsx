import React from 'react';

const Categories = (props) => {
    return (
        <>
            <div className='categories'>
                <div className='cat-img'>
                    <div className='row'>
                        <div className='col-1'>
                            <img 
                                src={props.imgsrc} 
                                alt='paan-photo' 
                                style={{ width: '150px', height: '170px' }} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Categories;

