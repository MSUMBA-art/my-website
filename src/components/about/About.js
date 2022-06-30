import "./about.css";
import Myself from "../../assets/fb.png";
import { SiHtml5 } from "react-icons/si";
// import { FiUsers } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import {MdContactless} from "react-icons/md"

import React from "react";

const greetings = "Getting To Know Me";
const about = "About Me";
const About = () => {
  return (
    <section id="about">
      <h5>{greetings}</h5>
      <h2>{about}</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={Myself} alt="myself" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <SiHtml5 className="about-icon" />
              <h5>Tech Skills</h5>
              <small>3 + years</small>
            </article>
            <article className="about-card">
              <GiSandsOfTime className="about-icon" />
              <h5>Soft Skills</h5>
              <small>3 + years</small>
            </article>
            <article className="about-card">
              <BsGlobe className="about-icon" />
              <h5>Some Projects</h5>
              <small>3 + years</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            elit, commodo eget malesuada eu, facilisis eleifend lorem. Class
            aptent taciti sociosqu ad litora torquent.
          </p>
          <a href="#contacts" className="btn btn-primary"><MdContactless />Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
