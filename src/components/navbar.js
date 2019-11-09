import '../styles/navbar.scss';

import React from 'react';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-mini-container'>
        <div className='logo-img'>
          <Link to='/' className='link'>
            <img alt='logo' src={logo}></img>
          </Link>
        </div>
        <ul>
          <li><Link to='/' className='link'>NEWS</Link></li>
          <li><Link to='/' className='link'>PARTNERS</Link></li>
          <li><Link to='/' className='link'>JOIN</Link></li>
          <li><Link to='/login' className='link'>LOG IN</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar