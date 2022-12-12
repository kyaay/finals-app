import React from 'react';
import './Styles/Navbar.scss'




function Navbar(){
    return(
    <div>    
        <div className='navbar'>
            <h1>Techno</h1>
                <div data-testid="inputdiv">
                    <input type="text"placeholder='Search'/>
                </div>
            <div data-testid="links" className='Links'>
                <a role="link" href='https://www.youtube.com/watch?v=OgO2U4quFDk'>Home</a>
                {/* <a href=''>Home</a>
                <a href=''>Home</a>
                <a href=''>Home</a>    */}
              
            </div>    
    
        </div>
     </div>
    )
}

export default Navbar;