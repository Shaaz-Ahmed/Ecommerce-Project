import React from 'react';

const Categories1 = (props) => {
    return (
        <>
            <div className='categories' style={props.style}>
                <div className='cat-img'>
                    <div className='row'>
                        <div className=''>
                            <img 
                                src={props.imgsrc} 
                                alt='category-photo' 
                                style={{ width: '130px', height: '170px' }} 
                            />
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    );
};

export default Categories1;
