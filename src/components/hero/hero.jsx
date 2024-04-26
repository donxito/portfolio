/* eslint-disable react/no-unescaped-entities */
import styles from "./hero.module.css";
import heroImage from "../../assets/hero2.png"


// date & greeting

let greeting = "";
const date = new Date();
let currentHour = date.getHours();

if (currentHour < 12) {
  greeting = "Good morning";
} else if (currentHour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}



const Hero = () => {
  return (
    <section className={styles.container} id="home">
      <div className={styles.content}>
        <h1 className={styles.title}>
          {greeting},<br/> I'm <span>Miguel</span>
        </h1>
        <h3 className={styles.description}>I'm a Full Stack Developer</h3>
        <a href="mailto:mchito@gmail.com" className={styles.contactBtn}>
          Get in touch
        </a>
      </div>
      <img src={heroImage} alt="hero" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
