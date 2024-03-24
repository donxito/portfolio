import styles from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />

      <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />

      </Routes>

      <About />
    </div>
  );
};

export default App;
