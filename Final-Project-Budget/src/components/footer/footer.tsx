import { NavLink } from 'react-router';
import Button from '../Button/button';
import facebookIcon from '../../assets/svg/facebook-icon.svg';
import instagramIcon from '../../assets/svg/instagram-icon.svg';
import youtubeIcon from '../../assets/svg/youtube-icon.svg';
import twitterIcon from '../../assets/svg/twitter-icon.svg';
import linkedinIcon from '../../assets/svg/linkedin-icon.svg';
import './footer.scss'

const Footer = () => {
  return (
    <footer className='footer-section'>
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
        <p>Newsletter</p>
        <div className='footer-section-contact-email'>
            <input type="email" placeholder='E-mail' />
            <Button text='Subscribe' variant='green' className='footer-section-contact-email-btn' />
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
