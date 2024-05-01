
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS for animations
import product1 from '../assets/product-1.png';
import product2 from '../assets/product-2.png';
import product3 from '../assets/product-3.png';

function Content() {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <>
        <div className='section-stack content mt-0 p-5 container d-flex justify-content-between align-items-center'>
            <div className='crafted'>
                <div data-aos='fade-right' data-aos-delay='500' className=' d-flex flex-column justify-content-center align-items-left'><h3>Crafted with <br/> excellent <br/> material.</h3>
                    <p className='p-2'>Donec mattis porta eros, aliquet <br/> finibus risus interdum at. Nulla <br/> vivethe as it was for us to know <br/> what was to be done.</p>
                    <button className='btn bg-dark text-light w-50 rounded-5'>Explore</button>
                </div>
            </div>
            <div className='nordicchair'>
              <div data-aos='zoom-in' data-aos-delay='425'><div style={{position:'relative',height:'400px',alignContent:'center'}}><p style={{position:'absolute',bottom:'10px',left:'-165px',backgroundColor:'#D9D9D9'}} className='text-center fw-bolder nordic border rounded-4'>Nordic CHAIR<br />$50.00</p><img style={{position:'absolute',top:'0px',right:'-75px'}} src={product1} alt="" /></div></div>
              <button className='plus btn rounded-circle bg-dark text-light'>+</button>
            </div>
            <div data-aos='fade-down' data-aos-delay='450'><img src={product2} alt="" /><div className='kruzo text-center fw-bolder pt-3'><p>Kruzo Aero Chair <br />$78.00</p></div></div>
            <div  data-aos='fade-left' data-aos-delay='400'><img  src={product3} alt="" /><div className='ergonomic text-center fw-bolder pt-3'><p>Ergonomic Chair <br />$43.00</p></div></div>
        </div>
    </>
  )
}

export default Content
