import React from 'react';
import './Styles/Footer.css';


const Footer = () => {
    return(
        <div className='main-footer'>
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
                </div>
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
