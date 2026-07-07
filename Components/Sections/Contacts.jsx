import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
} from "react-icons/fa";

const Contacts = () => {
  return (
    <section
      id="contact"
      className="bg-gray-950 text-white py-24"
    >
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Get In Touch
          </h2>

          <p className="mt-4 text-gray-400">
            Have a project in mind or want to connect? I'd love to hear from you.
          </p>

        </div>

        <div className="mt-16 space-y-6">

          {/* Email */}

          <a
            href="mailto:tiwarinitin319@gmail.com"
            className="flex items-center gap-4 bg-gray-900 p-5 rounded-xl border border-gray-800 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition"
          >
            <FaEnvelope className="text-3xl text-purple-500" />

            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-400">
                tiwarinitin319@gmail.com
              </p>
            </div>

          </a>

          {/* LinkedIn */}

          <a
            href="https://linkedin.com/in/nitin-tiwari-5826862a3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gray-900 p-5 rounded-xl border border-gray-800 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition"
          >
            <FaLinkedin className="text-3xl text-purple-500" />

            <div>
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-gray-400">
                linkedin.com/in/nitin-tiwari-5826862a3
              </p>
            </div>

          </a>

          {/* GitHub */}

          <a
            href="https://github.com/NITINTIWARI1234"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gray-900 p-5 rounded-xl border border-gray-800 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition"
          >
            <FaGithub className="text-3xl text-purple-500" />

            <div>
              <h3 className="font-semibold">GitHub</h3>
              <p className="text-gray-400">
                github.com/NITINTIWARI1234
              </p>
            </div>

          </a>

          {/* Resume */}

          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-4 bg-gray-900 p-5 rounded-xl border border-gray-800 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition"
          >
            <FaFileDownload className="text-3xl text-purple-500" />

            <div>
              <h3 className="font-semibold">Resume</h3>
              <p className="text-gray-400">
                Download Resume
              </p>
            </div>

          </a>

        </div>
      </div>
    </section>
  );
};

export default Contacts;