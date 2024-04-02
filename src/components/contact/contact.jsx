import styles from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    setSubmitting(true);

    emailjs
      .sendForm("service_ckihhci", "template_jnb6ota", form.current, {
        publicKey: "jNLWL1qxgeLsGTWa6",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          event.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Contact</h2>

      <p className={styles.description}>
        Please fill out the form bellow to discuss any work opportunities
      </p>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <input
          className={styles.name}
          type="text"
          placeholder="Your name"
          name="user_name"
        />
        <input
          className={styles.email}
          type="email"
          placeholder="Your email"
          name="user_email"
        />
        <textarea
          className={styles.message}
          name="message"
          rows="5"
          placeholder="Your message"
        ></textarea>

        {submitting ? (
          <button className={styles.submit} type="button" disabled>
            Submitting...
          </button>
        ) : (
          <button className={styles.submit} type="submit" value="Send">
            Submit
          </button>
        )}
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
