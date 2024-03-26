import styles from "./projects.module.css";
import projects from "../../data/projects.json"
import ProjecCard from "./ProjecCard";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {
          projects.map((project, id) => {
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

            )
          })
        }
      </div>
    </section>
  )
}

export default Projects
