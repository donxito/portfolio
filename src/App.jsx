import styles from "./App.module.css";

import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
