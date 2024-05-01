import React from 'react'
import couch from '../assets/couch 1.png'
  function Header() {
    return (
      <div className='container'>
        <header className="navbar p-5">
          <div className="brand">Furni.</div>
          <nav className="menu">
            <ul>
                <li className='active'><a href="" >Home</a></li>
                <li><a href="" >About Us</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
          </nav>
          </header>
  
          <div className=" textimgrow d-flex align-items-center justify-content-between mb-1">
            <div className="text column text-light p-5">
              <p>Modern Interior <br/> Design Studio</p>
              <div className='d-flex flex-row justify-content-evenly w-75'>
                <button className='btn rounded-5 bg-warning text-dark'>Shop Now</button>
                <button className='btn rounded-5 border text-light'>Explore</button>
              </div>
            </div>
            <div className="columnimg p-5">
              <img src={couch} alt="Image" />
            </div>
          </div>
     
      </div>
      

    

    );
    };
                
export default Header