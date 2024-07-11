import React from 'react';
import './social_media.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='social-media'>
      <h2>Follow Us</h2>
      <div className='social-icons'>
        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='icon facebook'>
          <FaFacebookF />
        </a>
        <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' className='icon twitter'>
          <FaTwitter />
        </a>
        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='icon instagram'>
          <FaInstagram />
        </a>
        <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='icon linkedin'>
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
