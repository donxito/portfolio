import styles from "./projects.module.css";
import projects from "../../data/projects.json"

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2>Projects</h2>
      <div>
        {
          projects.map((project, id) => {
            return (
              <div key={id}>
                <img src={`./src/assets/${project.image}`} alt={`Image of ${project.title}`}/>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.skills.map((skill, id) => {
                      <li key={id}>{skill}</li>
                  })}
                </ul>
                <div>
                  <a href={project.demo}>Demo</a>
                  <a href={project.repo}>Repo</a>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects
