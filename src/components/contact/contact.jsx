/* eslint-disable react/no-unescaped-entities */
import styles from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import cv from "../../assets/Miguel_Chito_CV.pdf";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    setSubmitting(true);

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log("SUCCESS!");
          console.log(result);
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

      <GlowCapture>
        <Glow color="hsla(231, 100%, 100%, 1)" speed={0.4}>
          <p className={styles.description}>
            Whether you're interested in discussing a project, sharing ideas, or
            simply dropping a friendly hello, feel free to get in touch with me.
            <br />
            You can reach out through the contact form provided below, connect
            with me on LinkedIn, or send me an email if that suits you better.
            <br />
            Whichever method you prefer, I'm thrilled to connect and delve into
            the potential opportunities together.
          </p>
        </Glow>
      </GlowCapture>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <input
          className={styles.name}
          type="text"
          placeholder="Your Name"
          name="user_name"
        />
        <input
          className={styles.email}
          type="email"
          placeholder="Your Email"
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

        <a
          href="mailto:mchito@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>

        <a href={cv} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFile} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
