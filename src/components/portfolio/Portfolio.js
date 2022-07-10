import "./portfolio.css";

import React from 'react';
import IMG1 from "../../assets/images/aj-3.jpg";
import IMG2 from "../../assets/images/aj-4.jpg";
import IMG3 from "../../assets/images/aj-8.jpg";
import IMG4 from "../../assets/images/rsa.jpg";
import IMG5 from "../../assets/images/7.jpg";


const data = [
  {
    id: 1,
    image: IMG5,
    title: "Love Your City",
    github: "https://github.com",
    demo: "https://loveyourcity.netlify.app/",
  },
  {
    id: 2,
    image: IMG4,
    title: "Love Your City",
    github: "https://github.com",
    demo: "https://loveyourcity.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Love Your City",
    github: "https://github.com",
    demo: "https://loveyourcity.netlify.app/",
  },
  {
    id: 4,
    image: IMG2,
    title: "Love Your City",
    github: "https://github.com",
    demo: "https://loveyourcity.netlify.app/",
  },
  {
    id: 5,
    image: IMG1,
    title: "Love Your City",
    github: "https://github.com",
    demo: "https://loveyourcity.netlify.app/",
  },
  {
    id: 6,
    image: IMG3,
    title: "Love Your City",
    github: "https://github.com",
    demo: "https://loveyourcity.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        
        {
         
          data.map(({ id, image, title, github, demo }) => {
            return (<article key={id} className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
                <a
                  className="btn"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  className="btn btn-primary"
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
            )
          })
        }
        

        
      </div>
    </section>
  );
}

export default Portfolio

