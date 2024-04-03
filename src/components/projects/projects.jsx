import styles from "./projects.module.css";
import projects from "../../data/projects.json";
import ProjecCard from "./ProjecCard";
import { GlowCapture, Glow } from "@codaworks/react-glow";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <GlowCapture>
        <Glow color="hsla(124, 100%, 50%, 1)">
          <p className={styles.description}>
            Here are some of my personal projects that I have created. These
            creations are born from my journey through learning, particularly
            during the dynamic experience of the Ironhack remote bootcamp. Dive
            into my imaginative solutions as I transform obstacles and glitches
            into valuable learning experiences, crafting innovative features
            that enhance the coding adventure!
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
