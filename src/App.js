import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./particlesConfig";

function App() {
  const particlesInit = (engine) => {
    loadFull(engine);
  };

  return (
    <>
      <Particles className="tsparticles" init={particlesInit} options={particlesOptions} />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
