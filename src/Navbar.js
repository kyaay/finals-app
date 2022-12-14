import React from 'react';
import './Styles/Navbar.scss';


function Navbar(){
    return(
    <div>    
        <header>
            <link href="https://fonts.googleapis.com/css2?family=Rubik+80s+Fade&display=swap" rel="stylesheet"></link>
            <h1 className='logo'>TECHNO</h1>
            <input type="inputBox"placeholder='Search' autoFocus/>
            <nav>
                <ul className='navlinks'>
                    <li><a href='home'><span className="material-symbols-outlined size-30">home</span></a></li>
                    <li><a href='contact-us'><span className="6material-symbols-outlined size-30">contact_page</span></a></li>
                    <li><a href='profile'><span className="material-symbols-outlined size-30">account_circle</span></a></li>
                    <li><a href='cart'><span className="material-symbols-outlined size-30">shopping_cart</span></a></li>
                </ul>
            </nav>
        </header>
     </div>
    )
}

export default Navbar;

/*

   <ul>
                    <li><a href='home'><span className="material-symbols-outlined size-30">home</span></a></li>
                    <li><a href='contact-us'><span className="material-symbols-outlined size-30">contact_page</span></a></li>
                    <li><a href='profile'><span className="material-symbols-outlined size-30">account_circle</span></a></li>
                    <li><a href='cart'><span className="material-symbols-outlined size-30">shopping_cart</span></a></li>
                </ul>

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
    */