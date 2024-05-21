/* eslint-disable react/no-unescaped-entities */

import styles from "./about.module.css";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
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
                I'm a passionate introvert who loves building things with code.
                As a dedicated and energetic Full Stack Developer with a solid
                background in graphic design, I'm fascinated by web applications
                and focus on user experience and interface design.
              </p>
              <p className={styles.aboutText}>
                A Chef, a Designer, and a Developer...
              </p>
              <p className={styles.aboutText}>
                After several years in the Graphic & Editorial Design Industry,
                I switched careers to become a Chef and traveled across
                Southeast Asia, cooking in various locations. Now, I've made the
                leap to become a Full Stack Developer. While this is a new
                journey for me, my previous professional experiences have
                equipped me with strong problem-solving skills, adaptability to
                new work environments, and a knack for acquiring new knowledge.
              </p>
              <p className={styles.aboutText}>
                I am proficient in the MERN stack and REST API, including
                JavaScript (ES6), React, Node.js, MongoDB, Express, HTML, and
                CSS. My aim is to create dynamic and intuitive web applications.
                I aspire to find a position where I can leverage my background
                and skills to bring value, continuously grow, and learn.
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
