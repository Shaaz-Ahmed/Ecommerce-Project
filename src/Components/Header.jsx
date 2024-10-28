import logo from '../assets/images/logos.png';
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";


const Header = () => {
    return (
        <>
            <div className="class-container" style={{ background: '', width: '100%', height: '60px' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2'>
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className='col-7' style={{ marginTop: '20px' }}>
                            <input type='text' placeholder='what product can we help you find?' style={{
                                width: '100%',
                                height: '39px',
                                borderRadius: '15px',
                                border: 'none',
                                background: '#E5E5E5',
                                paddingLeft: '20px',
                                textAlign: 'center',
                            }} />
                        </div>

                        <div className='col-3' style={{ marginTop: '17px' }}>
                            <span className='signup' style={styles.signIn}>Log In</span>
                            {/* <FaRegHeart className='icon' style={styles.icon} /> */}
                            {/* <MdOutlineAccountCircle className='icon' style={styles.icon} /> */}
                            {/* <IoCartOutline className='icon' style={styles.icon} />  */}
                            <button
  className="btn btn-success"
  style={{ marginLeft: '50px', padding: '10px 20px', fontWeight: 'bold' }}
>
  <IoCartOutline className="me-2" style={{ fontSize: '24px' }} /> CART
</button>

                        </div>
                    </div>
                </div>
            </div>
            <hr/>

            {/* Inline Styles for Hover Effects */}
            <style jsx>{`
                .signup:hover {
                    color: #007BFF;
                    transition: color 0.3s ease;
                }

                .icon:hover {
                    color: #007BFF;
                    transform: scale(1.2);
                    transition: transform 0.3s ease, color 0.3s ease;
                }
            `}</style>
        </>
    )
};

// Styles for Sign In and Icons
const styles = {
    signIn: {
        color: '#6A5858',
        marginLeft: '10px',
        cursor: 'pointer',
        transition: 'color 0.3s ease', // Transition effect on color change
    },
    icon: {
        color: '#6A5858',
        marginLeft: '20px',
        fontSize: '27px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, color 0.3s ease', // Animation on hover
    }
};

export default Header;