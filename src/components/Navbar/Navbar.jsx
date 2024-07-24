import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav'>
        <Link to="/" className='logo-link'>
            <img src='/logo.png' alt='DigiDiary Logo' className='logo' /> {/* Adjust the path if needed */}
        </Link>
        <h2 className='nav-brand'>DigiDiary</h2>
        <ul className='menu'>
            <li><Link to="/" className='menu-btn btn1'>Home</Link></li>
            <li><Link to="/newblog" className='menu-btn btn2'>New Blog</Link></li>
        </ul>
    </div>
  );
}

export default Navbar;
