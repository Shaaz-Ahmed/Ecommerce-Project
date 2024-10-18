import logo from '../assets/images/logos.png';

const Footer = () => {
    return (
        <>
        <section className='fot' style={{background:'#E3F0E4'}}>
            <div className="container">
                <div className="row mt-7">
                    <div className="col-2">
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className='col-2'>
                        <h3 className='' style={{color:'#6A5858', marginTop:'20px', marginBottom:'20px'}}>Mens</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2">Mens1</li> {/* Add margin-bottom */}
                            <li className="mb-2">Mens2</li>
                            <li>Mens3</li>
                        </ul>
                    </div>

                    <div className='col-1'>
                        {/* Empty column */}
                    </div>

                    <div className='col-2'>
                        <h3 className='' style={{color:'#6A5858', marginTop:'20px', marginBottom:'20px'}}>Womens</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2">Womens1</li> {/* Add margin-bottom */}
                            <li className="mb-2">Womens2</li>
                            <li>Womens3</li>
                        </ul>
                    </div>

                    <div className='col-1'>
                        {/* Empty column */}
                    </div>

                    <div className='col-2'>
                        <h3 className='' style={{color:'#6A5858', marginTop:'20px', marginBottom:'20px'}}>Kids</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2">Kids1</li> {/* Add margin-bottom */}
                            <li className="mb-2">Kids2</li>
                            <li>Kids3</li>
                        </ul>
                    </div>

                    <div className='col-1'>
                        
                      
                    </div>
                </div>
            </div>

        </section>
        </>
    );
};

export default Footer;
