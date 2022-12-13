import React from 'react';
import './Styles/Navbar.scss';


function Navbar(){
    return(
    <div>    
        <link href="https://fonts.googleapis.com/css2?family=Rubik+80s+Fade&display=swap" rel="stylesheet"></link>
        <div className='navbar'>
            <div className='logo' data-testid='logo'>
                <h1>TECHNO</h1>
            </div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <div className='inputBox' data-testid='inputBox'>
                    <input type="text"placeholder='Search'/>
                </div>
            <div className='Links' data-testid='links'>
                <a href='home'><span className="material-symbols-outlined size-30">home</span></a>
                <a href='contact-us'><span className="material-symbols-outlined size-30">contact_page</span></a>
                <a href='profile'><span className="material-symbols-outlined size-30">account_circle</span></a>
                <a href='cart'><span className="material-symbols-outlined size-30">shopping_cart</span></a>                 
            </div>    
        </div>
     </div>
    )
}

export default Navbar;