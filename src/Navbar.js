import React from 'react';
import './Styles/Navbar.scss'




function Navbar(){
    return(
    <div>    
        <div className='navbar'>
            <h1>Techno</h1>
                <div className='inputdiv'>
                    <input type="text"placeholder='Search'/>
                </div>
            <div className='Links'>
                <a href=''>Home</a>
                <a href=''>Home</a>
                <a href=''>Home</a>
                <a href=''>Home</a>   
              
            </div>    
    
        </div>
     </div>
    )
}

export default Navbar;