/* eslint-disable react/no-unescaped-entities */
import styles from "./projects.module.css";
import projects from "../../data/projects.json";
import ProjecCard from "./ProjecCard";
import { GlowCapture, Glow } from "@codaworks/react-glow";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <GlowCapture>
      <Glow color="hsla(231, 100%, 100%, 1)" speed={0.4}>
          <p className={styles.description}>
          Welcome to my personal project gallery! It's a showcase of my creative journey through learning, exploration, and experience. Here you'll find a collection of my innovative creations, each born from challenges I've faced and lessons I've learned. Dive into my imaginative solutions as I tackle obstacles head-on, turning them into valuable learning experiences.<br/> Join me on an exhilarating coding adventure where innovation knows no bounds. Every project reflects my passion for crafting cutting-edge features that push the boundaries of what's possible. So come explore and discover the magic of creation with me! Let's embark on a journey filled with endless possibilities and transformative experiences.
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
