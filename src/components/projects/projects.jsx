/* eslint-disable react/no-unescaped-entities */
import styles from "./projects.module.css";
import projects from "../../data/projects.json";
import ProjecCard from "./ProjecCard";
import { GlowCapture, Glow } from "@codaworks/react-glow";

console.log(projects)
const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <GlowCapture>
        <Glow color="hsla(231, 100%, 100%, 1)" speed={0.4}>
          <p className={styles.description}>
          Welcome to my personal project gallery! This showcase reflects my creative journey through learning, exploration, and experience.<br/> 
          Here, you'll find a collection of my innovative creations, each inspired by the challenges I've faced and the lessons I've learned.<br/> 
          Dive into my imaginative solutions as I tackle obstacles head-on, transforming them into valuable learning experiences.<br/>
          </p>
        </Glow>
      </GlowCapture>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <ProjecCard
              key={id}
              title={project.title}
              description={project.description}
              image={project.image}
              demo={project.demo}
              repo={project.repo}
              skills={project.skills}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
