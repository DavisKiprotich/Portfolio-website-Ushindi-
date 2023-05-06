import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div classname='header'>
        <Link to='/'>
        <img src='../Assets/logo.jpeg' alt='logo' />
        </Link>
        <ul className='nav-menu'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/about'>About</Link>
          </li>
          <li> 
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    )
  }
  
  export default Navbar