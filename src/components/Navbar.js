import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import logoImg from '../Assets/logo.jpeg';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)


    return (
      <div classname='header'>
        <Link to='/'>
        <img className='logo' src={logoImg} alt='logo' />
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
        <div className='ham' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color:'#fff' }} />)
              : (<FaBars size={20} style={{ color:'#fff' }} />)}  
        </div>
      </div>
    )
  }
  
  export default Navbar