import Navbar from "../components/layout/Navbar";
import Hero from "../components/Sections/Hero";
import About from "../components/Sections/About";
import Skills from "../components/Sections/Skills";
import Projects from "../components/Sections/Projects";
import Achievements from "../components/Sections/Achivements";
import Contact from "../components/Sections/Contacts";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
     <>
      <Navbar />
     
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
