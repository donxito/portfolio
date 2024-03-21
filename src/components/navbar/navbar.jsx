import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo" />

      <div className="menu">
        <Link className="menu-item" to="home" smooth={true} duration={500}>
          Home
        </Link>
        <Link className="menu-item" to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link className="menu-item" to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link className="menu-item" to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </div>

      <div className="social-icons">
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
