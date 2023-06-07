import React from 'react'
import"./Navbar.css"

function Navbar(){
  return (
      
         <nav>
    <div className='logo'>
        <img src="https://pentadsecurities.com/static/media/main_logo.e25b3d49fea3aafefb995baa84be4516.svg" alt=""/>
    </div>
    <div className='navalign'>
        <ul>
            <li>About</li>
            <li>Products</li>
            <li>Platforms</li>
            <li>Attention investors</li>
            <li>Contact us</li>
            <li>|</li><br>
            </br>
            <li>Open an Account</li>
            <button className='login-button'>Login</button>
           
        </ul>
    </div>
</nav>

  );
};

export default Navbar