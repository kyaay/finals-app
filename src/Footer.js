import React from 'react';
import './Styles/Footer.css';


const Footer = () => {
    return(
        <div className='main-footer'>
            <div className='container'>
                <div className='row'>
                    {/*Column1*/}
                    <div className='col'>
                        <h4> TECHNO INC.</h4>
                        <ul className='list-unstyled'>
                            <li>Lenovo</li>
                            <br />
                            <li>Acer</li>
                            <br />
                            <li>Asus</li>
                        </ul>
                    </div>
                    {/*Column2*/}
                    <div className='col'>
                        <h4>Support</h4>
                        <ul className='list-support'>
                            <li>Discord</li>
                            <br />
                            <li>Fb</li>
                            <br />
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='row'>
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
