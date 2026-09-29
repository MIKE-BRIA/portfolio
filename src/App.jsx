import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import InfiniteSkillsScroll from "./components/Skills";
import Toolkit from "./components/ToolkitData";
import WhatsAppBubble from "./components/WhatsAppBubble";

const App = () => {
  useEffect(() => {
    // Check if the URL has a hash when the app first loads
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        // Slight delay ensures all components have finished rendering their DOM
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <main>
        <Nav />
        <Home />
        <InfiniteSkillsScroll />
        <Projects />
        <Toolkit />
        <About />
        <Contact />
        <WhatsAppBubble />
      </main>
    </>
  );
};

export default App;
