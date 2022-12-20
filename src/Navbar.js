import React from 'react';
import './Styles/Navbar.scss';


function Navbar(){
    return(
    <div>    
        <header>
            <link href="https://fonts.googleapis.com/css2?family=Rubik+80s+Fade&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h1 className='logo' data-testid="logo">TECHNO</h1>
            <div className='form'>
            <input data-testid="inputBox" type="inputBox"placeholder='Search' autoFocus/>
            </div>
            <nav>
                <ul className='navlinks'>
                    <li><a href='home'><i className="fa fa-home fa-2x" data-testid="home"></i></a></li>
                    <li><a href='contact-us'><i className="fa fa-address-book fa-2x" data-testid="contact"></i></a></li>
                    <li><a href='profile'><i className="fa fa-user-circle fa-2x" data-testid="profile"></i></a></li>
                    <li><a href='cart'><i className="fa fa-shopping-cart fa-2x" data-testid="cart"></i></a></li>
                </ul>
            </nav>
        </header>
     </div>
    )
}

export default Navbar;
