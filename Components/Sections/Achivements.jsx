import React from 'react'
import FadeIn from "../animations/FadeIn";


import {
  FaTrophy,
  FaCode,
  FaLaptopCode,
  FaRobot,
} from "react-icons/fa";

const achievements = [
  {
    icon: FaCode,
    title: "100+ DSA Problems",
    description:
      "Solved over 100 data structures and algorithms problems on LeetCode.",
  },
  {
    icon: FaTrophy,
    title: "#100DaysOfCode",
    description:
      "Maintaining consistency by solving DSA problems and sharing daily progress.",
  },
  {
    icon: FaLaptopCode,
    title: "MERN Projects",
    description:
      "Built multiple responsive full-stack web applications using the MERN stack.",
  },
  {
    icon: FaRobot,
    title: "AI Learning",
    description:
      "Learning AI integrations and building intelligent web applications.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Achievements
          </h2>

          <p className="mt-4 text-gray-400">
            Milestones that reflect my learning journey.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {achievements.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300"
              >

                <Icon className="text-5xl text-purple-500 mb-6" />

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {item.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
};

export default Achievements;