import React, { useState } from 'react';
import './social_media.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useContext } from 'react';
import Context from '../../../context';
const SocialMedia = (prop) => {
  const {setsocial_media_modalopen}=useContext(Context)
  const [instagram,setinstagram]=useState("")
  const [facebook,setfacebook]=useState("")
  const [twitter,settwitter]=useState("")
  const [linkedin,setlinkedin]=useState("")
  return (
    <div className='social-media'>
      <h2>Social Media Profile</h2>
     
      <div className='social-icons'>
        <a href={facebook} target='_blank' rel='noopener noreferrer' className='icon facebook'>
          <FaFacebookF />
        </a>
        <a href={twitter} target='_blank' rel='noopener noreferrer' className='icon twitter'>
          <FaTwitter />
        </a>
        <a href={instagram} target='_blank' rel='noopener noreferrer' className='icon instagram'>
          <FaInstagram />
        </a>
        <a href={linkedin} target='_blank' rel='noopener noreferrer' className='icon linkedin'>
          <FaLinkedinIn />
        </a>
      </div>
      <button onClick={()=>{setsocial_media_modalopen(true)}}>Edit Link</button>
    </div>
  );
}

export default SocialMedia;
