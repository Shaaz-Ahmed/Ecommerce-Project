import React from 'react';

const Dairy = (props) => {
    return (
        <>
            <div className='card' style={{ width: '11rem' }}>
                <img src={props.imgsrc} alt='dairy image' style={{ height: '150px', objectFit: 'cover' }} />
                <div className='body'>
                    <h6 className="product-name text-center">{props.title}</h6>
                    <p className='desc' style={{ marginLeft: '10px' }}>{props.desc}</p>
                </div>
                <div className="more d-flex justify-content-between align-items-center">
                    <h6 style={{ marginLeft: '4px' }}>{props.mrp}</h6>
                    <button className="btn" style={{ border: '1px solid black', marginRight: '10px', marginBottom: '10px' }}>{props.btn}</button>
                </div>
            </div>
        </>
    );
};

export default Dairy;
