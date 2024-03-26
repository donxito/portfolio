/* eslint-disable react/prop-types */

import styles from "./ProjectCard.module.css";

const ProjecCard = (props) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={`./src/assets/${props.image}`}
        alt={`Image of ${props.title}`}
      />
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
      <ul className={styles.skills}>
        {props.skills.map((skill, id) => {
          <li key={id} className={styles.skill}>{skill}</li>;
        })}
      </ul>
      <div className={styles.links}>
        <a href={props.demo} className={styles.link}>Demo</a>
        <a href={props.repo} className={styles.link}>Repo</a>
      </div>
    </div>
  );
};

export default ProjecCard;
