import React, { useState } from 'react';
import { NavLink } from 'react-router';
import Button from '../../UI/Button/button';
import facebookIcon from '../../../assets/svg/facebook-icon.svg';
import instagramIcon from '../../../assets/svg/instagram-icon.svg';
import youtubeIcon from '../../../assets/svg/youtube-icon.svg';
import twitterIcon from '../../../assets/svg/twitter-icon.svg';
import linkedinIcon from '../../../assets/svg/linkedin-icon.svg';
import './footer.scss'

const Footer = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value);
    }

    const handleSubscribe = () => {
        if(email === '') {
            setError("Can't be empty!");
            return;
        }

        if(!email.includes('@gmail.com')) {
            setError("@gmail.com was omitted!");
            return;
        }
        setEmail('');
        setError('');
    }
  return (
    <footer className='footer-section container'>
     <div className='footer-section-main'>   
      <div className='footer-section-info'>
        <h1 className='footer-section-info-logo'>Monux</h1>
        <ul className='footer-section-info-list'>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Contact Us</li>
        </ul>
      </div>

      <div className='footer-section-contact'>
        <p className='footer-section-contact-title'>Newsletter</p>
        <div className='footer-section-contact-email'>
            <div className='footer-section-contact-email-input'>
            <input type="email" value={email} onChange={handleChange} placeholder='E-mail' />
            <Button text='Subscribe' onClick={handleSubscribe} variant='blue' className='footer-section-contact-email-input-btn' />
            </div>
            {error && <p className="footer-section-contact-email-error">{error}</p>}
        </div>
        <div className='footer-section-contact-social-media'>
            <img src={facebookIcon} alt="facebook-icon" />
            <img src={instagramIcon} alt="instagram-icon" />
            <img src={youtubeIcon} alt="youtube-icon" />
            <img src={twitterIcon} alt="twitter-icon" />
            <img src={linkedinIcon} alt="linkedin-icon" />
        </div>
      </div>

      <div className='footer-section-navbar'>
        <NavLink className='footer-section-navbar-link' to="/" end>
            Home
        </NavLink>
        <NavLink className='footer-section-navbar-link' to="/help" end>
            Help
        </NavLink>
        <NavLink className='footer-section-navbar-link' to="/faq">FAQ</NavLink>
        <NavLink className='footer-section-navbar-link' to="/blog">Blog</NavLink>
        <NavLink className='footer-section-navbar-link' to="/subscription">Subscription</NavLink>
      </div>
     </div> 

     <p className='footer-section-copyright'>© 2025 «Budget» ASC. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
