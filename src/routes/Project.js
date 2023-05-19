import React from 'react';
import Navbar from '../components/Navbar';
import Heroimg2 from '../components/Heroimg2';
import Footer from '../components/Footer';

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading='MY PROJECTS.' text='Glimpse of my recent work' />
      <Footer />
    </div>
  )
}

export default Project