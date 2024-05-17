import styles from "./App.module.css";

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
      <Projects />
      <About />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default App;
