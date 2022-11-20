import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./particlesConfig";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";

function App() {
  const particlesInit = (engine) => {
    loadFull(engine);
  };

  return (
    <>
      <Navbar />
      <Particles className="tsparticles" init={particlesInit} options={particlesOptions} />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
    </>
  );
}

export default App;
