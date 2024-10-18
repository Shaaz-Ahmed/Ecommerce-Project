import React from 'react';
import logo from '../assets/images/logo.png'; // Ensure the path is correct
import { Link } from "react-router-dom";
import { CiHome, CiShoppingBasket, CiMail } from "react-icons/ci";

const Header = () => {
    return (
        <div className='container'>
            <div className='row mt-2'>   {/* Row starting */}
                <div className="col-2">
                    <img src={logo} alt="Logo" className="mb-3" /> {/* mb-3 adds bottom margin for spacing */}
                </div>

                <div className='col-5'>
                    <ul className='list-inline mt-3'> {/* Use Bootstrap's list-inline class */}
                        <li className='list-inline-item mx-2'> {/* mx-3 adds horizontal margin */}
                            <button style={{ background: 'none', textDecoration: 'none', border: 'none', padding: '2px' }}>
                                <CiHome className=' one'/> Home
                            </button>
                        </li>

                        <li className='list-inline-item mx-2'> {/* mx-3 adds horizontal margin */}
                            <button style={{ background: 'none', textDecoration: 'none', border: 'none', padding: '2px' }}>
                                <CiShoppingBasket className=' one'/> Shop
                            </button>
                        </li>

                        <li className='list-inline-item mx-2'> {/* mx-3 adds horizontal margin */}
                            <button style={{ background: 'none', textDecoration: 'none', border: 'none', padding: '2px' }}>
                                <CiMail className=' one'/> Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </div>  {/* Row ending */}
        </div>
    );
};

export default Header;
