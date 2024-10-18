import logo from '../assets/images/logos.png';
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";


const Header = () =>{
    return(
        <>
         <div className="class-container" style={{background:'#E3F0E4', width:'100%' , height:'67px'}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-2'>
                        <img src={logo} />
                    </div>
                    <div className='col-7' style={{background:'', marginTop:'10px'}}>
                            <input type='text' placeholder='what product can we help you find?' style={{
                                    width: '100%', 
                                    height: '39px', 
                                    borderRadius: '30px', 
                                    border: 'none', 
                                    background: '#FFF9F9', 
                                    paddingLeft: '20px', // Padding for better left alignment
                                    textAlign: 'center',  // Centers text horizontally
                                }} />
                    </div>

                    <div className='col-3' style={{background:'', marginTop:'17px'}}>
                        <span className='signup' style={{color:'#6A5858', marginLeft:'10px'}}>Sign In</span>
                        <FaRegHeart style={{color:'#6A5858', marginLeft:'40px', fontSize: '27px'}} />
                        <MdOutlineAccountCircle style={{color:'#6A5858', marginLeft:'20px', fontSize: '27px'}}/>
                      <IoCartOutline  style={{color:'#6A5858', marginLeft:'20px', fontSize: '27px'}}/>

                    </div>
                </div>
            </div>
         </div>
        </>
    )
};

export default Header;