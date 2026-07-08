import FadeIn from "../animations/FadeIn";

const projects = [
  {
    title: "AI Card Generator",
    image: "/projects/ai-card.png",
    description:
      "AI-powered web application that generates beautiful cards from user prompts with a clean and responsive interface.",
    tech: ["Next.js", "React", "Tailwind CSS", "Gemini API"],
    github: "https://github.com/NITINTIWARI1234/AI_cardgenerator",
    live: "#",
  },

  {
    title: "BitLinks",
    image: "/projects/bitlinks.png",
    description:
      "A MERN-based URL shortener that allows users to create and manage shortened links with an intuitive interface.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/NITINTIWARI1234/BitLinls",
    live: ": https://lnkd.in/gkJFgdM8",
  },

  {
    title: "Portfolio",
    image: "/projects/portfolio.png",
    description:
      "Modern developer portfolio built using Next.js with responsive layouts, smooth animations, and reusable React components.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/NITINTIWARI1234/portfolio",
    live: "#",
  },
];


const Projects = () => {
  return (
    <FadeIn>
    <section
      id="projects"
      className="bg-gray-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            My Projects
          </h2>

          <p className="mt-4 text-gray-400">
            Here are some of the projects I've built using modern web technologies.
          </p>

        </div>

        {/* Project Cards will come here */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-lg hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.45)] hover:-translate-y-2 transition-all duration-300"
            >

              {/* Project Image */}

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              {/* Project Content */}

              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.map((tech, techIndex) => (

                    <span
                      key={techIndex}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-4 mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
    </FadeIn>
  );
};

export default Projects;