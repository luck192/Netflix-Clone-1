import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div>

      <ul>
        <li>Audio Description</li>
        <li>Help center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Perfomances</li>
        <li>Corporate info</li>
      </ul>
      <p className='copyright-text'> &copy; 2026 All Rights Reserved</p>
    </div>
  )
}

export default Footer
