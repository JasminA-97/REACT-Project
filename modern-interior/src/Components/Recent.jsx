import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS for animations
import post1 from '../assets/post1.png';
import post2 from '../assets/post2.png';
import post3 from '../assets/post3.png';

function Recent() {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <div className='p-5 recent container'>
      <div className='recnte d-flex justify-content-between'>
        <h3 className='ps-5 fw-bolder'>Recent Blog</h3>
        <a className='pe-5 text-dark fw-bolder' href='#'>View All Post</a>
      </div>
      <div className='recnt p-5 d-flex justify-content-between align-items-center'>
        <div className='col' data-aos='fade-up'>
          <img src={post1} alt='' />
          <p className='pt-4 fs-5 fw-medium'>First Time Home Owner Ideas</p>
          <p>by Nana Ama on Nov 18th, 2022</p>
        </div>
        <div className='col' data-aos='fade-up' data-aos-delay='400'>
          <img src={post2} alt='' />
          <p className='pt-4 fs-5 fw-medium'>First Time Home Owner Ideas</p>
          <p>by Nana Ama on Nov 18th, 2022</p>
        </div>
        <div className='col' data-aos='fade-up' data-aos-delay='600'>
          <img src={post3} alt='' />
          <p className='pt-4 fs-5 fw-medium'>First Time Home Owner Ideas</p>
          <p>by Nana Ama on Nov 18th, 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Recent;
