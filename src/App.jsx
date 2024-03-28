import styles from "./App.module.css";

// import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

const App = () => {
  return (
    <div className={styles.App}>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
    </div>
  );
};

export default App;
