import "./header.css";

import React from 'react';
import CVCT from "./CVCT";
import ME from "../../assets/green.jpeg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello  I'm</h5>
        <h1>Alexander Msumba</h1>
        <h4 className="text-light">Fullstack Software Engineer</h4>
        <CVCT />
        <HeaderSocials />
        <div className="">
          <img className="me" src={ME} alt="myself" />
        </div>
        <a href="#contact" className="scroll-down" >Scroll Down</a>
      </div>
    </header>
  )
}

export default Header