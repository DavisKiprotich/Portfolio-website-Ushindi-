import './NavbarStyles.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import logoImg from '../Assets/logo.jpeg';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    return (
      <div className='header'>
        <Link to='/'>
          <img className='logo' src={logoImg} alt='logo' />
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li> 
            <Link to='/projects'>Services</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <div className='ham' onClick={handleClick}>
        {click ? (<FaTimes size={30} style={{ color:'#fff' }} />)
              : (<FaBars size={30} style={{ color:'#fff' }} />)}  
        </div>
      </div>
    )
  }
  
  export default Navbar