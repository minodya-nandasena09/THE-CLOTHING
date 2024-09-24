import React from "react";
import "./Footer.css";
import f_logo from "../Assets/logo_big.png";
import ins from "../Assets/instagram_icon.png";
import pin from "../Assets/pintester_icon.png";
import wts from "../Assets/whatsapp_icon.png";

function Footer() {
  return (
    <>
      <div class="footer">
        
        <div class="footer-logo">
          <img src={f_logo} alt="" />
          
          <p>THE CLOTHING</p>
        </div>
        <ul class="footer-links">
          <li>company</li>
          <li>Products</li>
          <li>Outlets</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        <div class="footer-icons">
          <div class="footer-icons-container">
            <img src={ins} alt="" />
          </div>
          <div class="footer-icons-container">
            <img src={pin} alt="" />
          </div>
          <div class="footer-icons-container">
            <img src={wts} alt="" />
          </div>
        </div>
        <div class="footer-copyright">
          <hr />
          <p>© 2024 - All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}
export default Footer;
