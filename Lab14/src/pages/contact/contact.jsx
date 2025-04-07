import './contact.css'
import React from 'react'
import Icons from '../../assets/social-media.png';

const Contact = () => {
  return (
    <div className='container'>
      <div className='contact-page'>
      <h1 className='contact-page-title'>Contact Us</h1>
      <div className='contact-page-info'>
        <div>
          <h2>Call us</h2>
          <p>055-555-55-55</p>
        </div>
        <div>
          <h2>Social media</h2>
          <img src={Icons} alt="social-media" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
