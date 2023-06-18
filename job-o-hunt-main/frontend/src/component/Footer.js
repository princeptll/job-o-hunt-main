import React from 'react'
import "./Footer.css"
import UtuLogo from '../assets/Utulogo.png'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaPhoneAlt, FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className='block'>
      <div class="leftFooter">
        <div>
          <img src={UtuLogo} alt="" />
          <p>Maliba Campus, Tarsadi, Mahuva-Bardoli Rd,</p>
          <p>Gopal Vidyanagar, Barodli, Gujarat 394350</p>
        </div>
        <div>
          <p><h3><b>Follow Us</b></h3></p>
          <div>
            <a href='https://www.facebook.com/placement.utu/' target="_blank" className='follow'><FaFacebook /></a>
            <a href='https://twitter.com/utumalibacampus' target="_blank" className='follow'><FaTwitter /></a>
            <a href='https://www.linkedin.com/company/ukatarsadiacgpit/?originalSubdomain=in' target="_blank" className='follow'><FaLinkedinIn /></a>
            <a href='https://www.instagram.com/utu.cgpit/?hl=en' target="_blank" className='follow'><FaInstagram /></a>
            <a href='https://www.youtube.com/playlist?list=PLgpTBSmzZ5ocua41Dbh8Vb-ydO9VW8GWs' target="_blank" className='follow'><FaYoutube /></a>
          </div>
        </div>
        <div>
          <p><h3><b>Contact Us</b></h3></p>
          <p className='colorIcon'><FaPhoneAlt />&emsp;6353030096</p>
          <p className='colorIcon'><FaMobileAlt />&emsp;6353033853</p>
        </div>
      </div>
      <div class="midFooter">
        <h2>Quick Links</h2>
        <p><a href='http://utu.ac.in/utuplacement/#/VisionandMission' target="_blank">Vision & Mission</a></p>
        <p><a href='http://utu.ac.in/utuplacement/#/ProcessPolicy' target="_blank">Process & Policy</a></p>
        <p><a href='http://utu.ac.in/utuplacement/#/PlacementNews' target="_blank">Placement News</a></p>
        <p><a href='http://utu.ac.in/utuplacement/#/PlacementTeam' target="_blank">Placement Team</a></p>
        <p><a href='http://utu.ac.in/utuplacement/#/PlacementRecord' target="_blank">Placement Records</a></p>
        <p><a href='http://utu.ac.in/utuplacement/#/Recruiters' target="_blank">Our Leading Recruiters</a></p>
        <p><a href='http://utu.ac.in/utuplacement/#/PlacementGlimps' target="_blank">Placement Glimps</a></p>
      </div>
      <div class="rightFooter">
        
      </div>
    </footer>
  )
}

export default Footer