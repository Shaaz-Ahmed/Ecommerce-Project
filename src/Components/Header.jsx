import React from 'react';
import logo from '../assets/images/logo.png';

const MyHeader = ()=>{
    return(
        <>
            <div className='container'>
               
                <div className='row mt-2'>   {/* Row starting */}
                    <div className="col-2" style={{ backgroundColor: '' }}>
                        <img src={logo}/>
                     </div>

                     <div className='col-6' style={{background: ''}}>
                         <ul>
                         <li className='list-inline-item'>
                                    <Link to='/'>  &nbsp;Home</Link>
                                </li>
                            <li>shop</li>
                            <li>contact</li>
                         </ul>   
                     </div>
                </div>  {/* row ending */}
            </div> 
        </>
    )
};

export default MyHeader;