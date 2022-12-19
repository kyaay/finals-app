import React from 'react';
import './Styles/Navbar.scss';


function Navbar(){
    return(
    <div>    
        <header>
            <link href="https://fonts.googleapis.com/css2?family=Rubik+80s+Fade&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h1 className='logo'>TECHNO</h1>
            <div className='forms'>
            <input type="inputBox"placeholder='Search' autoFocus/>
            </div>
            <nav>
                <ul className='navlinks'>
                    <li><a href='home'><i class="fa fa-home fa-2x"></i></a></li>
                    <li><a href='contact-us'><i class="fa fa-address-book fa-2x"></i></a></li>
                    <li><a href='login'><i class="fa fa-user-circle fa-2x"></i></a></li>
                    <li><a href='cart'><i class="fa fa-shopping-cart fa-2x"></i></a></li>
                </ul>
            </nav>
        </header>
     </div>
    )
}

export default Navbar;
