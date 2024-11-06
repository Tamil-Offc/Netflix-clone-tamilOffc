import React from 'react'
import "./Footer.css"
import youtube_icon from "../../assets/footer_icon/youtube.png"
import twitter_icon from "../../assets/footer_icon/twitter.png"
import instagram_icon from "../../assets/footer_icon/instagram.png"
import facebook_icon from "../../assets/footer_icon/facebook-app-symbol.png"
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
        <li>Help Centre </li>
        <li>Gift Card</li>
        <li>Media Cetre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms and Use</li>
        <li>Privacy </li>
        <li>Legal Notice</li>
        <li>Cookie Preferences</li>
        <li>Corporation Information</li>
        <li>Contact Us</li>
        </ul>
        <p className='copyright-text'>© 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer;