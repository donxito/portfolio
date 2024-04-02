import styles from "./App.module.css";

// import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className={styles.App}>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default App;
