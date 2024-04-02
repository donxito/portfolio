import styles from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Contact</h2>

      <p className={styles.description}>
        Please fill out the form bellow to discuss any work opportunities
      </p>
      <form className={styles.form}>
        <input className={styles.name} type="text" placeholder="Your name" />
        <input className={styles.email} type="email" placeholder="Your email" />
        <textarea
          className={styles.message}
          name="message"
          rows="5"
          placeholder="Your message"
        ></textarea>

        <button className={styles.submit} type="submit" value="Send">
          Submit
        </button>
      </form>
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
    </section>
  );
};

export default Contact;
