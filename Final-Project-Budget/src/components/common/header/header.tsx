import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../UI/Button/button';
import hamburgerIcon from '../../../assets/svg/hamburger.svg';
import facebookIcon from '../../../assets/svg/white-fb-icon.svg';
import instagramIcon from '../../../assets/svg/white-instagram-icon.svg';
import youtubeIcon from '../../../assets/svg/white-youtube-icon.svg';
import twitterIcon from '../../../assets/svg/white-twitter-icon.svg';
import linkedinIcon from '../../../assets/svg/white-linkedin-icon.svg';
import "./header.scss"

const Header = () => {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    useEffect(() => {
      if (sidebarOpen) {
       document.body.style.overflow = 'hidden';
       document.documentElement.style.overflow = 'hidden';
      } else {
       document.body.style.overflow = '';
       document.documentElement.style.overflow = '';
      }

     return () => {
       document.body.style.overflow = '';
       document.documentElement.style.overflow = '';
     };
    }, [sidebarOpen]);

  return (
    <header className='header-section container'>
        <NavLink className='header-section-logo' to="/" end>
            <h1>Monux</h1>
        </NavLink>

        <img className='header-section-hamburger' src={hamburgerIcon} onClick={toggleSidebar} alt="hamburger-icon" />

        <nav className='header-section-navbar'>
            <NavLink className='header-section-navbar-link' to="/" end>
                 Home
            </NavLink>
            <NavLink className='header-section-navbar-link' to="/help" end>
                 Help
            </NavLink>
            <NavLink className='header-section-navbar-link' to="/faq">FAQ</NavLink>
            <NavLink className='header-section-navbar-link' to="/blog">Blog</NavLink>
            <NavLink className='header-section-navbar-link' to="/subscription">Subscription</NavLink>
            <Button text='Login' onClick={() => navigate('/login')} variant='blue'/>
        </nav>

        <nav className={`header-section-sidebar ${sidebarOpen ? 'open' : ''}`}>
            <button className="header-section-sidebar-close-btn" onClick={toggleSidebar}>×</button>
            <NavLink className='header-section-sidebar-link' onClick={toggleSidebar} to="/login">Login</NavLink>
            <NavLink className='header-section-sidebar-link' onClick={toggleSidebar} to="/" end>Home</NavLink>
            <NavLink className='header-section-sidebar-link' onClick={toggleSidebar} to="/help" end>Help</NavLink>
            <NavLink className='header-section-sidebar-link' onClick={toggleSidebar} to="/faq">FAQ</NavLink>
            <NavLink className='header-section-sidebar-link' onClick={toggleSidebar} to="/blog">Blog</NavLink>
            <NavLink className='header-section-sidebar-link' onClick={toggleSidebar} to="/subscription">Subscription</NavLink>
            <NavLink className='header-section-sidebar-link' onClick={toggleSidebar} to="/faq">Privacy Policy</NavLink>
            <NavLink className='header-section-sidebar-link' onClick={toggleSidebar} to="/blog">Terms and Conditions</NavLink>
            <NavLink className='header-section-sidebar-link' onClick={toggleSidebar} to="/subscription">Contact Us</NavLink>

            <div className='header-section-sidebar-social-media'>
              <img src={facebookIcon} alt="facebook-icon" />
              <img src={instagramIcon} alt="instagram-icon" />
              <img src={youtubeIcon} alt="youtube-icon" />
              <img src={twitterIcon} alt="twitter-icon" />
              <img src={linkedinIcon} alt="linkedin-icon" />
            </div>
        </nav>
      
        {sidebarOpen && <div className="header-section-overlay" onClick={toggleSidebar}></div>}
    </header>
  )
}

export default Header
