import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-white py-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center">

          <h2 className="text-3xl font-bold">
            Nitin Tiwari
          </h2>

          <p className="text-gray-400 mt-3">
            Full Stack MERN Developer • AI Enthusiast
          </p>

          {/* Social Icons */}

          <div className="flex gap-6 mt-6">

            <a
              href="https://github.com/NITINTIWARI1234"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="text-3xl hover:text-purple-500 transition"
              />
            </a>

            <a
              href="https://linkedin.com/in/nitin-tiwari-5826862a3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-3xl hover:text-purple-500 transition"
              />
            </a>

            <a href="mailto:tiwarinitin319@gmail.com">
              <FaEnvelope
                className="text-3xl hover:text-purple-500 transition"
              />
            </a>

          </div>

          <p className="text-gray-500 text-sm mt-8">
            © {new Date().getFullYear()} Nitin Tiwari. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;