import './HeroStyles.css';
import React from 'react';
import BackImg from '../Assets/laptop.jpeg';

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='back-img' src={BackImg} alt='backgroundImg' />
        </div>
        <div className='content'>
          <p></p>
        </div>
    </div>
  )
}

export default Heroimg