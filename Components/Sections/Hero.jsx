"use client";

import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h1 className="text-5xl font-bold text-white">
            Hi, I'm <span className="text-blue-500">Nitin Tiwari</span> 👋
          </h1>

          <p className="mt-6 text-2xl text-gray-300">
            <TypeAnimation
              sequence={[
                "Full Stack MERN Developer",
                2000,
                "Next.js Developer",
                2000,
                "DSA Enthusiast",
                2000,
                "AI Learner",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
             
                View Projects
              
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/NITINTIWARI1234"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={35}
                className="text-gray-300 hover:text-blue-500 transition"
              />
            </a>

            <a
              href="https://linkedin.com/in/nitin-tiwari-5826862a3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={35}
                className="text-gray-300 hover:text-blue-500 transition"
              />
            </a>

            <a href="mailto:tiwarinitin319@gmail.com">
              <FaEnvelope
                size={35}
                className="text-gray-300 hover:text-blue-500 transition"
              />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <Image
            src="/images/pro.png"
            alt="Profile"
            width={350}
            height={350}
            className="rounded-full shadow-2xl border-4 border-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;