import React from 'react'
import './Topbar.css'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Topbar = () => {
    return (
        <div className='topbar'>
            <a href='https://www.facebook.com/placement.utu/' target="_blank" className='colorLink'><FaFacebook/></a>
            <a href='https://twitter.com/utumalibacampus' target="_blank" className='colorLink'><FaTwitter/></a>
            <a href='https://www.linkedin.com/company/ukatarsadiacgpit/?originalSubdomain=in' target="_blank" className='colorLink'><FaLinkedinIn/></a>
            <a href='https://www.instagram.com/utu.cgpit/?hl=en' target="_blank" className='colorLink'><FaInstagram/></a>
            <a href='https://www.youtube.com/playlist?list=PLgpTBSmzZ5ocua41Dbh8Vb-ydO9VW8GWs' target="_blank" className='colorLink'><FaYoutube/></a>
            University Office : 6353030096, 6353033853 Working day 10 AM to 3 PM | registrar@utu.ac.in | Contact Us
        </div>
    )
}

export default Topbar
