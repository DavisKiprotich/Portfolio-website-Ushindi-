import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div classname='header'>
        <Link to='/'>
        <img src='../Assets/logo.jpeg' alt='logo'/>
        </Link>
      </div>
    )
  }
  
  export default Navbar