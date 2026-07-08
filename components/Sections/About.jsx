import React from 'react'
import FadeIn from "../animations/FadeIn";


const About = () => {
  return (
    <FadeIn>
    <section
      id="about"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          About Me
        </h2>

        <p className="mt-8 text-gray-300 text-lg leading-8 text-center max-w-3xl mx-auto">
          I'm Nitin Tiwari, a passionate Full Stack MERN Developer currently
          pursuing B.Tech in Computer Science (AI). I enjoy solving Data
          Structures and Algorithms problems, building responsive web
          applications, and continuously learning new technologies like AI and
          Machine Learning.
        </p>

      </div>
    </section>
    </FadeIn>
  );
};

export default About;