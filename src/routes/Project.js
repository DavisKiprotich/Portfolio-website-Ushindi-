import React from 'react';
import Navbar from '../components/Navbar';
import Heroimg2 from '../components/Heroimg2';
import PricingCard from '../components/PricingCard';

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading='MY PROJECTS.' text='Glimpse of my recent work' />
      <PricingCard />
    </div>
  )
}

export default Project