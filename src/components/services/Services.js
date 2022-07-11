import "./services.css";

import React from 'react';
import { BsCheckAll } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services-container">
        <article className="services">
          <div className="services-head">
            <h3>UI/UX Development</h3>
          </div>
          <ul className="services-list">
            <li>
              <BsCheckAll size={30} className="service-list-icon" />
              <p>HTML , CSS, Bootstrap</p>
            </li>
            <li>
              <BsCheckAll size={30} className="service-list-icon" />
              <p>JavaScript, ReactJs</p>
            </li>
            <li>
              <BsCheckAll size={30} className="service-list-icon" />
              <p>Ejs, JQuery</p>
            </li>
            <li>
              <BsCheckAll size={30} className="service-list-icon" />
              <p>Frontend Frameworks</p>
            </li>
            {/* <li>
              <BsCheckAll size={30} className="service-list-icon" />
              <p>Lorem ipisum mry do jdw thgw yyyooopppkjh.</p>
            </li> */}
          </ul>
        </article>
        <article className="services">
          <div className="services-head">
            <h3>Backend Development</h3>
          </div>
          <ul className="services-list">
            <li>
              <BsCheckAll size={30} className="service-list-icon" />
              <p>NodeJs</p>
            </li>
            <li>
              <BsCheckAll size={30} className="service-list-icon" />
              <p>ExpressJs</p>
            </li>
            <li>
              <BsCheckAll size={30} className="service-list-icon" />
              <p>REST API</p>
            </li>
            {/* <li>
              <BsCheckAll size={30} className="service-list-icon" />
              <p>Lorem ipisum mry do jdw thgw yyyooopppkjh.</p>
            </li> */}
            <li>
              <BsCheckAll size={30} className="service-list-icon" />
              <p>Problem Solving</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="services-head">
            <h3>Database</h3>
          </div>
          <ul className="services-list">
            <li>
              <BsCheckAll size={30} className="service-list-icon" />
              <p>PostgreSQL</p>
            </li>
            <li>
              <BsCheckAll size={30} className="service-list-icon" />
              <p>MySQL</p>
            </li>
            <li>
              <BsCheckAll size={30} className="service-list-icon" />
              <p>MongoDB</p>
            </li>
            <li>
              <BsCheckAll size={30} className="service-list-icon" />
              <p>Git Version Control</p>
            </li>
            
            {/* <li>
              <BsCheckAll size={30} className="service-list-icon" />
              <p>Lorem ipisum mry do jdw thgw yyyooopppkjh.</p>
            </li> */}
            
          </ul>

        </article>
        
      </div>
    </section>
  );
}

export default Services