import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Achievements from "../components/sections/Achivements";
import Contact from "../components/sections/Contacts";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
     <>
      <Navbar />
      <p>paragraph</p>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
