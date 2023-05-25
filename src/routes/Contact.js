import React from 'react';
import Navbar from '../components/Navbar';
import Heroimg2 from '../components/Heroimg2';
import ContactMe from '../components/ContactMe';

const Contact = () => {
  return (
      <div>
        <Navbar />
        <Heroimg2 heading='CONTACT' text='Let us have a chat' />
        <ContactMe />
    </div>
  )
}

export default Contact