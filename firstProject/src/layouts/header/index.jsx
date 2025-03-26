import React from 'react';
import Button from '../../components/button-component';
import "./header.scss";

const Header = () => {
  return (
    <header className='header'>
        <h2>Company</h2>
        <ul className='header-menu'>
            <li className='header-menu-item'>Home</li>
            <li className='header-menu-item'>Contact</li>
        </ul>
        <Button />
    </header>
  )
}

export default Header