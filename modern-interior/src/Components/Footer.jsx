import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS for animations
import sofa from '../assets/sofa 1.png';

function Footer() {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <div className='container p-5'>
      <div className='subs d-flex flex-row justify-content-between align-items-center' data-aos='fade-up'>
        <div className='w-50'>
          <h4 className='mb-4 mt-5'><i className="fa-regular fa-envelope text-secondary"></i>&nbsp;&nbsp;Subscribe to Newsletter</h4>
          <div className='d-flex flex-row justify-content-evenly align-items-center'>
            <input className='rounded-3 form-control' type="text" placeholder='Enter your name' />&nbsp;&nbsp;&nbsp;
            <input className='rounded-3 form-control' type="text" placeholder='Enter your e-mail' />&nbsp;&nbsp;&nbsp;
            <button className="btn bg-success rounded-3 text-light"><i className="fa-solid fa-paper-plane"></i></button>
          </div>
        </div>
        <div data-aos='fade-left' data-aos-delay='500'><img className='w-75' src={sofa} alt="" /></div>
      </div>
      <div>
        <h3 data-aos='fade-up'>Furni.</h3>
        <div className="row">
          <div className="col" data-aos='fade-up'>
            <p>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the this is a long post for the text.`This small text has to be place here, since this is </p>
          </div>
          <div className="col" data-aos='fade-up'>
            <ul style={{ listStyle: 'none' }}>
              <li>About Us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col" data-aos='fade-up'>
            <ul style={{ listStyle: 'none' }}>
              <li>Support</li>
              <li>Knowledge base</li>
              <li>Live chat</li>
            </ul>
          </div>
          <div className="col" data-aos='fade-up'>
            <ul style={{ listStyle: 'none' }}>
              <li>Jobs</li>
              <li>Our team</li>
              <li>Leadership</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="col" data-aos='fade-up'>
            <ul style={{ listStyle: 'none' }}>
              <li>Nordic Chair</li>
              <li>Kruzo Aero</li>
              <li>Ergonomic</li>
            </ul>
          </div>
        </div>
        <div className="social mt-2" data-aos='fade-up'>
          <i className="fa-brands fa-facebook-f soc"></i>
          <i className="fa-brands fa-instagram soc"></i>
          <i className="fa-brands fa-twitter soc"></i>
          <i className="fa-brands fa-linkedin soc"></i>
        </div>
        <hr className='mt-4 mb-5' data-aos='fade-up' />
        <div className='d-flex justify-content-between align-items-center' >
          <div>Copyright 2022 degraft87@gmail.com. All Rights Reserved.</div>
          <div className='d-flex justify-content-evenly align-items-center'>
            <div className='me-5'>Terms & Conditions</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
