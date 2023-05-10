import './HeroStyles.css';
import backgroundImg from '../Assets/laptop.jpeg';
import React from 'react'

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='back-img' style={{ backgroundImage: `url(${backgroundImg})`}} alt='background' />
        </div>
    </div>
  )
}

export default Heroimg