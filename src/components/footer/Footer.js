import "./footer.css";

import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer-logo">
        Alexander
      </a>

      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-socials">
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://github.com"><BsGithub/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
      </div>
      <div className="footer-copyright">
        <small>&copy; ALEXANDER MSUMBA. All rights reserved !</small>
      </div>
    </footer>
  );
}

export default Footer