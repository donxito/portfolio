/* eslint-disable react/no-unescaped-entities */

import styles from "./about.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faReact, faSquareJs, faNodeJs } from '@fortawesome/free-brands-svg-icons';


const About = () => {

    
  return (
    <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
    <img src="./src/assets/hero1.png" alt="about image" className={styles.aboutImg} />
    <div className={styles.aboutTextContainer}>
    <p className={styles.aboutText}>
    I'm  a passionate introvert who loves building things with code. A dedicated and energetic Full Stack Developer with a solid background in graphic design, fascinated by web applications, who focuses on user experience and interface design. 
    </p>
    <br/>
    <p className={styles.aboutText}>
    My first experience with programming was when I was 12, but I didn’t last long: I was a big fan of playing games in my Commodore 64, the iconic games, the music synthesiser. So I decided I wanted to do computer science. My mom bought me a C++ Reference Manual. It was several hundred pages, and totally inscrutable to me.
    </p>
    <br/>
    <h3 className={styles.aboutText}>
    A Chef, a Designer, and a Developer...
    </h3>
    <p className={styles.aboutText}>
    After several years of experience in the Graphic & Editorial Design Industry, I changed careers to become a Chef and traveled across Southeast Asia while cooking in various locations. Now, I have made the leap to become a Full Stack Developer. While this is a new journey for me, my previous professional experiences have equipped me with problem-solving skills, the ability to adapt to new work environments, and the ease of acquiring new knowledge.
    </p>
    <br/>
    <p className={styles.aboutText}>
    I aim to create dynamic and intuitive web applications. My goal is to find a position where I can utilize my background and skills to bring value and continuously grow and learn.  Proficient in the MERN stack and REST API, including JavaScript (ES6), React, Node.js, MongoDB, Express, HTML, and CSS.  
    </p>
  

    <div className={styles.skills}>
    <div className={styles.skillsContainer}>
    <FontAwesomeIcon icon={faHtml5} className={styles.icons} />
    <FontAwesomeIcon icon={faCss3Alt} className={styles.icons} />
    <FontAwesomeIcon icon={faSquareJs} className={styles.icons} />
    <FontAwesomeIcon icon={faReact} className={styles.icons} />
    <FontAwesomeIcon icon={faNodeJs} className={styles.icons} />
    </div>
    </div>
    </div>

    
    </div>
    </section>
  )
}

export default About;
