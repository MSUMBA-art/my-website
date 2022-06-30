import "./skills.css";
import { BsShieldFillCheck } from "react-icons/bs";

import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <h5>My Skills</h5>
      <h2>My Expertise</h2>

      <div className="container skills-container">
        <div className="front-end">
          <h3>Frontend Development</h3>
          <div className="skills-content">
            <article className="skills-details">
              <BsShieldFillCheck className="skills-details-icons" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills-details">
              <BsShieldFillCheck className="skills-details-icons" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills-details">
              <BsShieldFillCheck className="skills-details-icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills-details">
              <BsShieldFillCheck className="skills-details-icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills-details">
              <BsShieldFillCheck className="skills-details-icons" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills-details">
              <BsShieldFillCheck className="skills-details-icons" />
              <div>
                <h4>JQuery</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="front-end">
          <h3>Backend Development</h3>
          <div className="skills-content">
            <article className="skills-details">
              <BsShieldFillCheck className="skills-details-icons" />
              <div>
                <h4>Node.Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills-details">
              <BsShieldFillCheck className="skills-details-icons" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills-details">
              <BsShieldFillCheck className="skills-details-icons" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills-details">
              <BsShieldFillCheck className="skills-details-icons" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills-details">
              <BsShieldFillCheck className="skills-details-icons" />
              <div>
                <h4>API</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills-details">
              <BsShieldFillCheck className="skills-details-icons" />
              <div>
                <h4>GitHub</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
