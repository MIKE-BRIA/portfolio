// import About from "./components/About";
import About from "./components/About";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import InfiniteSkillsScroll from "./components/Skills";
import Toolkit from "./components/ToolkitData";

const App = () => {
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
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default App;
