import React from 'react';
import './Styles/Footer.scss';


const Footer = () => {
    return(
        <div class="footer">
            <div class="footcontainer">
                <div class="row">
                    <div class="footer-col">
                        <h4>Techno Inc.</h4>
                        <ul>
                            <li><a href='lenovo'>Lenovo</a></li>
                            <li><a href='Ace'>Ace</a></li>
                            <li><a href='Asus'>Asus</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><a href='/discord'>Discord</a></li>
                            <li><a href='/facebook'>Facebook</a></li>
                            <li><a href='/instagram'>Instagram</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Account</h4>
                        <ul>
                            <li><a href='/account'>My Account</a></li>
                            <li><a href='/my_orders'>My Orders</a></li>
                            <li><a href='/my_whistlist'>My Wishlist</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                         <h4>Techno Online Store</h4>
                            <ul className='acer_store'>
                                <li><a href='/Terms_Condition'>Terms & Condition</a></li>
                            </ul>
                    </div>
                    <div class="footer-col">
                          <h4>Stay Connected</h4> 
                          <div class="social-links">
                            <a href='home'><i class="fa fa-facebook fa-1x"></i></a>
                            <a href='contact-us'><i class="fa fa-google fa-1x"></i></a>
                            <a href='profile'><i class="fa fa-twitter fa-1x"></i></a>
                          </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
               
                <hr />
                    <div className='row-bottom'>
                        <p className='col-sm'>
                            &copy;{new Date().getFullYear()} TECHNO INC | All Rights Reserved 
                        </p>
                    </div>
            </div> 
        </div>
    )
}
//guys di pani final hehe


export default Footer;

/* <div className='main-footer'>
            <h3 className='forinc'>For Inquiries, contact TECHNO at (02) 8-555-2300</h3>
                <div className='container'>
                    <div className='row'>
                        {Column1}
                        <div className='col'>
                            <h3> TECHNO INC.</h3>
                            <ul className='list-unstyled'>
                                <li><a href='lenovo'>Lenovo</a></li>
                                <li><a href='Ace'>Ace</a></li>
                                <li><a href='Asus'>Asus</a></li>
                            </ul>
                        </div>
                        {Column2}
                        <div className='col'>
                            <h3>Support</h3>
                            <ul className='list-support'>
                                <li><a href='/discord'>Discord</a></li>
                                <li><a href='/facebook'>Facebook</a></li>
                                <li><a href='/instagram'>Instagram</a></li>
                            </ul>
                        </div>
                        {Column3}
                        <div className='col'>
                            <h3>Account</h3>
                            <ul className='account'>
                                <li><a href='/account'>My Account</a></li>
                                <li><a href='/my_orders'>My Orders</a></li>
                                <li><a href='/my_whistlist'>My Wishlist</a></li>
                            </ul>
                        </div>
                        {Column4}
                        <div className='col'>
                            <h3>Acer ONLINE STORE</h3>
                            <ul className='acer_store'>
                                <li><a href='/Terms_Condition'>Terms & Contdition</a></li>
                            </ul>
                        </div>
                           {Column5}
                           <div className='col'>
                            <h3>Stay Connected</h3>
                            <ul className='stay_connected'>
                            <li><a href='home'><i class="fa fa-facebook fa-2x"></i></a></li>
                            <li><a href='contact-us'><i class="fa fa-google fa-2x"></i></a></li>
                            <li><a href='profile'><i class="fa fa-twitter fa-2x"></i></a></li>
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
            */