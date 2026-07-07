import Image from "next/image";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiCplusplus,
  SiPython,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: SiReact,
    level: "w-[90%]",
    color: "text-cyan-400",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    level: "w-[85%]",
    color: "text-white",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    level: "w-[88%]",
    color: "text-green-500",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    level: "w-[82%]",
    color: "text-gray-300",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    level: "w-[85%]",
    color: "text-green-400",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    level: "w-[90%]",
    color: "text-yellow-400",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: "w-[90%]",
    color: "text-sky-400",
  },
  {
    name: "Git",
    icon: SiGit,
    level: "w-[80%]",
    color: "text-orange-500",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    level: "w-[85%]",
    color: "text-white",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    level: "w-[85%]",
    color: "text-blue-500",
  },
  {
    name: "Python",
    icon: SiPython,
    level: "w-[75%]",
    color: "text-yellow-500",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Section */}
          {/* Left Section */}
          <div className="relative w-full h-[400px] md:h-full min-h-[500px]">
            <Image
              src="/images/skills.png"
              alt="Developer Illustration"
              fill
              className="object-cover object-center rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>  

          {/* Right Section */}
          <div>

            <h2 className="text-4xl font-bold">
              My Skills
            </h2>

            <p className="mt-4 text-gray-400">
              Technologies I use to build fast, scalable, and responsive web applications.
            </p>

            <div className="mt-10">

              {skills.map((skill, index) => {

                const Icon = skill.icon;

                return (

                  <div
                    key={index}
                    className="mb-8"
                  >

                    {/* Skill Name */}
                    <div className="flex items-center gap-3 mb-2">

                      <Icon
                        className={`${skill.color} text-2xl`}
                      />

                      <span className="text-lg font-medium">
                        {skill.name}
                      </span>

                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">

                      <div
                        className={`h-full bg-blue-500 rounded-full ${skill.level}`}
                      ></div>

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;