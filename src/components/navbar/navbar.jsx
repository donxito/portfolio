
import styles from "./navbar.module.css";
import { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";



const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className={styles.navbar}>

      <div className={styles.menu}> 

      {menuOpen ? (
          <IoClose
            className={`${styles.menuBtn}`}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        ) : (
          <IoMenu
            className={`${styles.menuBtn}`}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        )}
        
        

        <Link activeClass={styles.active} to="home" smooth={true} duration={500} spy={true} offset={-50} className={`${styles.menuItem} ${menuOpen && styles.menuOpen}`}  onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link activeClass={styles.active} to="projects" smooth={true} duration={500} spy={true} offset={-100} className={`${styles.menuItem} ${menuOpen && styles.menuOpen}`}  onClick={() => setMenuOpen(false)}>
          Projects
        </Link>
        <Link activeClass={styles.active} to="about" smooth={true} duration={500} spy={true} offset={-100} className={`${styles.menuItem} ${menuOpen && styles.menuOpen}`}  onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link activeClass={styles.active} to="contact" smooth={true} duration={500} spy={true} offset={-100} className={`${styles.menuItem} ${menuOpen && styles.menuOpen}`}  onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </div>

      <div className={styles.socialIcons}>
        <a
          href="https://www.linkedin.com/in/miguelchito-reactdeveloper/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://github.com/donxito"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </nav>
  );
}


export default Navbar;
