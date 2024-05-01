import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS for animations
import whychoose from '../assets/whychoose.png';
import dot from '../assets/Dot.png';

function ChooseUs() {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <div className="chooseus recent p-5 container d-flex w-100" data-aos="fade-down">
      <div className="textcontent w-50 p-5" data-aos="fade-right">
        <div className="why">
          <h4>Why Choose Us</h4>
          <p>
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            <br />
            vivethe as it was for us to know what was to be done. the
          </p>
        </div>
        <div className="fourcol pt-5">
          <div className="firstrow d-flex pt-3" >
            <div className="fast"data-aos="slide-up">
              <i className="fa-solid fa-truck fs-4"></i>
              <p className="fw-bolder">Fast & Free Shipping</p>
              <p>
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was
              </p>
            </div>
            <div className="easy "data-aos="slide-right">
              <i className="fa-solid fa-bag-shopping fs-4"></i>
              <p className="fw-bolder">Easy to Shop</p>
              <p>
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was
              </p>
            </div>
          </div>
          <div className="secondrow d-flex pt-3" >
            <div className="support"data-aos="slide-right">
              <i className="fa-regular fa-futbol fs-4"></i>
              <p className="fw-bolder">24/7 Support</p>
              <p>
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was
              </p>
            </div>
            <div className="hassle" data-aos="zoom-in">
              <i className="fa-solid fa-repeat fs-4"></i>
              <p className="fw-bolder">Hassle Free Returns</p>
              <p>
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ width: '450px', position: 'relative' }}
        className="imagecontent"
        data-aos="flip-left" data-aos-delay='450' >
        <img className='dot' src={dot} alt="" />
        <img
          style={{ position: 'absolute', top: '50px', left: '115px' }}
          className="why w-100"
          src={whychoose}
          alt=""
        />
      </div>
    </div>
  );
}

export default ChooseUs;
