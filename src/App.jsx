import { useRef } from "react";
import "./App.css";
import About from "./pages/About";
import Certifications from "./pages/Certifications";
import Education from "./pages/Education";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { MyContext } from "./MyContext";
import LocomotiveScroll from "locomotive-scroll";
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const home = useRef();
  const about = useRef();
  const education = useRef();
  const certifications = useRef();
  const projects = useRef();

  return (
    <MyContext.Provider
      value={{ home, about, education, certifications, projects }}
    >
      <div
        className="overflow-hidden"
       
      >
        <Home />
        <About />
        <Education />
        <Certifications />
        <Projects />
        <Footer />
      </div>
    </MyContext.Provider>
  );
}

export default App;
