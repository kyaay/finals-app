import React from 'react';
import './Styles/Footer.css';


const Footer = () => {
    return(
        <div>
            <div className='main-footer'>
            <h3 className='forinc'>For Inquiries, contact TECHNO at (02) 8-555-2300</h3>
                <div className='container'>
                    <div className='row'>
                        {/*Column1*/}
                        <div className='col'>
                            <h3> TECHNO INC.</h3>
                            <ul className='list-unstyled'>
                                <li><a href='lenovo'>Lenovo</a></li>
                                <br />
                                <li><a href='Ace'>Ace</a></li>
                                <br />
                                <li><a href='Asus'>Asus</a></li>
                            </ul>
                        </div>
                        {/*Column2*/}
                        <div className='col'>
                            <h3>Support</h3>
                            <ul className='list-support'>
                                <li><a href='/discord'>Discord</a></li>
                                <br />
                                <li><a href='/facebook'>Facebook</a></li>
                                <br />
                                <li><a href='/instagram'>Instagram</a></li>
                            </ul>
                        </div>
                        {/*Column3*/}
                        <div className='col'>
                            <h3>Account</h3>
                            <ul className='account'>
                                <li><a href='/account'>My Account</a></li>
                                <br />
                                <li><a href='/my_orders'>My Orders</a></li>
                                <br />
                                <li><a href='/my_whistlist'>My Wishlist</a></li>
                            </ul>
                        </div>
                        {/*Column4*/}
                        <div className='col'>
                            <h3>Acer ONLINE STORE</h3>
                            <ul className='acer_store'>
                                <li><a href='/Terms_Condition'>Terms & Contdition</a></li>
                            </ul>
                        </div>
                           {/*Column5*/}
                           <div className='col'>
                            <h3>Stay Connected</h3>
                            <ul className='stay_connected'>
                            <li><a href='home'><i class="fa-brands fa-facebook"></i></a></li>
                            <li><a href='contact-us'><i class="fa-brands fa-google"></i></a></li>
                            <li><a href='profile'><i class="fa-brands fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className='row-bottom'>
                        <p className='col-sm'>
                            &copy;{new Date().getFullYear()} TECHNO INC | All Rights Reserved 
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
//guys di pani final hehe


export default Footer;
