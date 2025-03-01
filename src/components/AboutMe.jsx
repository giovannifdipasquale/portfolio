export const AboutMe = ({ visibility }) => {
  return (
    <div className={`dark-mode ${visibility}`}>
      {/* Home Button */}
      <span className="homeButton">
        <a href="/" className="anchor-class">
          /home
        </a>
      </span>

      {/* Title Section */}
      <h1 className="py-1 px-3 text-center">Giovanni Di Pasquale</h1>

      {/* About Me Section */}
      <div className="aboutme-div px-5 pt-3 pb-3 border-bottom borderDark">
        <div className="px-3">
          <p>
            Passionate <strong>Full Stack Developer</strong> specializing in
            <strong>
              {" "}
              PHP, Laravel, MySQL, HTML, CSS, JavaScript, and React
            </strong>
            . Focused on building{" "}
            <strong>responsive and user-friendly web applications</strong>
            with modern design and optimal user experience.
          </p>
          <p>
            Experienced in <strong>fast-paced, dynamic environments</strong>,
            allowing me to sharpen my <strong>problem-solving</strong> skills,
            adaptability, and time management.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-div px-5 pt-3 pb-3 border-bottom borderDark">
        <div className="py-1">
          <h5>
            <span className="light-mode">Skills & Technologies</span>
          </h5>
        </div>
        <div className="px-3">
          <ul className="list-unstyled">
            <li>
              <strong>Frontend:</strong> HTML, CSS, Bootstrap, JavaScript
              (Vanilla & jQuery), React
            </li>
            <li>
              <strong>Backend:</strong> PHP, Laravel, MySQL
            </li>
            <li>
              <strong>Tools:</strong> Git, GitHub, Composer, NPM
            </li>
            <li>
              <strong>API & AI:</strong> OpenAI API, Hugging Face AI
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contacts-div px-5 pt-3 pb-3 border-bottom borderDark">
        <h5>
          <span className="light-mode">Contacts</span>
        </h5>
        <div className="px-3">
          <p>
            <i className="fs-5 bi bi-envelope me-2"></i>
            <strong>Email:</strong> giovanni.francesco97@gmail.com
          </p>
          <p>
            <i className="fs-5 bi bi-telephone me-2"></i>
            <strong>Phone:</strong> +39 123 456 7890
          </p>
          <p>
            <i className="fs-5 bi bi-geo-alt me-2"></i>
            <strong>Address:</strong> Bologna, Italy
          </p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="socials-div px-5 pt-3 pb-3 border-bottom borderDark">
        <h5>
          <span className="light-mode">Social Media</span>
        </h5>
        <div className="px-3">
          <p>
            <i className="fs-5 bi bi-linkedin me-2"></i>
            <a
              href="https://www.linkedin.com/in/giovannifdipasquale"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-class"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <i className="fs-5 bi bi-github me-2"></i>
            <a
              href="https://github.com/giovannifdipasquale"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-class"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>

      {/* CV Section */}
      <div className="cv-div px-5 pt-3 pb-3">
        <h5>
          <span className="light-mode">My CV</span>
        </h5>
        <div className="px-3">
          <p>
            <i className="fs-5 bi bi-file-earmark-text me-2"></i>
            <a
              href="/path-to-your-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-class"
            >
              Download CV
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
