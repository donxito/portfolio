/* eslint-disable react/no-unescaped-entities */

import styles from "./about.module.css";
import { SiMongodb, SiExpress, SiTailwindcss} from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faSquareJs,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { GlowCapture, Glow } from "@codaworks/react-glow";

const About = () => {
  return (
    <section className={styles.container} id="about">
  
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
      
        <div className={styles.aboutTextContainer}>
        <GlowCapture>
        <Glow color="hsla(231, 100%, 100%, 1)" speed={0.4}>
          <p className={styles.aboutText}>
            I'm a passionate introvert who loves building things with code. A
            dedicated and energetic Full Stack Developer with a solid background
            in graphic design, fascinated by web applications, who focuses on
            user experience and interface design.
          </p>
          <p className={styles.aboutText}>
            A Chef, a Designer, and a Developer...
          </p>
          <p className={styles.aboutText}>
            After several years of experience in the Graphic & Editorial Design
            Industry, I changed careers to become a Chef and traveled across
            Southeast Asia while cooking in various locations.<br/> Now, I have made
            the leap to become a Full Stack Developer. While this is a new
            journey for me, my previous professional experiences have equipped
            me with problem-solving skills, the ability to adapt to new work
            environments, and the ease of acquiring new knowledge.
          </p>
          <p className={styles.aboutText}>
            Proficient in the MERN
            stack and REST API, including JavaScript (ES6), React, Node.js,
            MongoDB, Express, HTML, and CSS.<br/>
            I aim to create dynamic and intuitive web applications. My goal is
            to find a position where I can utilize my background and skills to
            bring value and continuously grow and learn.
          </p>

          </Glow>
        </GlowCapture>  
          <div className={styles.skills}>
            <div className={styles.skillsContainer}>
            
              <FontAwesomeIcon icon={faHtml5} className={styles.icons} />
              <FontAwesomeIcon icon={faCss3Alt} className={styles.icons} />
              <FontAwesomeIcon icon={faSquareJs} className={styles.icons} />
              <FontAwesomeIcon icon={faReact} className={styles.icons} />
              <FontAwesomeIcon icon={faNodeJs} className={styles.icons} />
              <SiMongodb className={styles.icons} id={styles.icons2} />
              <SiExpress className={styles.icons} id={styles.icons2} />
              <SiTailwindcss className={styles.icons} id={styles.icons2} />
      
      
            </div>
            
          </div>
        </div>
    
      </div>
     
    </section>
  );
};

export default About;
