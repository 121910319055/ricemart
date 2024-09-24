import React from 'react';
import logok from "./logok.jpg";
import './Footer.css'; 

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
              <div>
               <div className="logo">
               <img src= {logok} alt="Logo" />
               </div>
               </div>
                <div className="footer-section social">
                    <h3>Let's Get Social</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>
                <div className="footer-section about">
                    <h3>Who We Are</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our Technology Advantage</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Refund Policy</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Shiva Traders</p>
                    <p>H No. 12/15/3 Vaglo Building,</p>
                    <p>Hyderabad, 500 801</p>
                    <p>Email: <a href="mailto:info@sattvicfoods.in">info@shivatraders.in</a></p>
                    <p>Phone: +91 9090909090</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Shiva Traders. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;