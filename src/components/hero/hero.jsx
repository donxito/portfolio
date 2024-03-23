/* eslint-disable react/no-unescaped-entities */
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hello, I'm <span>Miguel</span>
        </h1>
        <h3 className={styles.description}>I'm a Full Stack Developer</h3>
        <a href="mailto:mchito@gmail.com" className={styles.contactBtn}>
          Get in touch
        </a>
      </div>
      <img src="./src/assets/hero2.png" alt="hero" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
