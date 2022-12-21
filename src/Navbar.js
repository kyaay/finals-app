import React from 'react';
import { CartContext } from './App'
import Cart from './Cart'
import './Styles/Navbar.scss';


function Navbar(){
    // const {activeCart} = React.useContext(CartContext);
    return(
    <div>    
        <header>
            <link href="https://fonts.googleapis.com/css2?family=Rubik+80s+Fade&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h1 className='logo' data-testid="logo">TECHNO</h1>
            <div className='forms'>
            <input type="inputBox"placeholder='Search' autoFocus data-testid="inputBox"/>
            </div>
            <nav>
                <ul className='navlinks'>
                    <li><a href='/'><i className="fa fa-home fa-2x" data-testid="home"></i></a></li>
                    <li><a href ='cart'><i className="fa fa-shopping-cart fa-2x"></i></a></li>
                </ul>
            </nav>
        </header>
     </div>
    )
}

export default Navbar;
