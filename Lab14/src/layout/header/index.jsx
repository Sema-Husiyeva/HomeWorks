import React from 'react'
import './header.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.jpeg';

const Header = () => {
  return (
    <>
       <header className='header'>
       <NavLink to="/" end>
       <img className='header-logo' src={Logo} alt="logo" />
       </NavLink>
        <nav className='header-navbar'>
           <NavLink className='header-navbar-link' to="/" end>
             Home
           </NavLink>
           <NavLink className='header-navbar-link' to="/about" end>
             About
           </NavLink>
           <NavLink className='header-navbar-link' to="/contact">Contact</NavLink>
        </nav>
       </header>
    </>
  )
}

export default Header