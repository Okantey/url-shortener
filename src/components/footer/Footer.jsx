import React from "react";
import "./Footer.css";
import logo from "../../assets/logo-white.svg";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img src={logo} alt="shortly" style={{ color: "white" }} />
      </div>
      <div className="footer__boxes">
        <h3>Features</h3>
        <ul className="links__box">
          <li>
            <a href="#Link-Shortening">Link Shortening</a>
          </li>
          <li>
            <a href="#Branded-Links">Branded Links</a>
          </li>
          <li>
            <a href="#Analytics">Analytics</a>
          </li>
        </ul>
      </div>
      <div className="footer__boxes">
        <h3>Resources</h3>
        <ul className="links__box">
          <li>
            <a href="#Blog">Blog</a>
          </li>
          <li>
            <a href="#Developers">Developers</a>
          </li>
          <li>
            <a href="#Support">Support</a>
          </li>
        </ul>
      </div>
      <div className="footer__boxes">
        <h3>Company</h3>
        <ul className="links__box">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Our-Team">Our Team</a>
          </li>
          <li>
            <a href="#Careers">Careers</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="socials__links">
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={pinterest} alt="pinterest" />
        <img src={instagram} alt="instagram" />
      </div>
    </footer>
  );
};

export default Footer;
