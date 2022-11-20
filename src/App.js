import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./particlesConfig";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

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
    </>
  );
}

export default App;
