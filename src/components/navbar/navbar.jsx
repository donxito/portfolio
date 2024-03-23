
import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
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
    
      <img className={styles.logo}  src={logo} alt="logo" />

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
        
        

        <Link className={`${styles.menuItem} ${menuOpen && styles.menuOpen}`} to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link className={`${styles.menuItem} ${menuOpen && styles.menuOpen}`} to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link className={`${styles.menuItem} ${menuOpen && styles.menuOpen}`} to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
          Projects
        </Link>
        <Link className={`${styles.menuItem} ${menuOpen && styles.menuOpen}`} to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
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
