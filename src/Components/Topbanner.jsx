import React from 'react';

function Topbanner(props) {
    return ( <>
        <div>
            <img src={props.imgsrc} alt="Banner" style={{ width: '340px', height: '200px', margin: '10px', display:'flex' }} />
        </div>
        

        </>
        
    );
}

export default Topbanner;


