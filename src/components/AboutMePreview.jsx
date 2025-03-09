export const AboutMePreview = ({ visibility }) => {
  return (
    <div className={`${visibility} dropdown-div  text-light`}>
      {/* Title Section */}
      <div className="text-center mb-4">
        <h1 className="">Giovanni Di Pasquale</h1>
        <h5>
          <span className="dark-mode">Junior Full Stack Developer</span>
        </h5>
      </div>
      {/* About Me Section */}
      <div className="py-3 border-start border-bottom borderLight">
        <div className="px-3 ">
          <p>
            I strive to build intuitive, well-designed, and scalable web
            applications for the world to enjoy
          </p>
        </div>
      </div>
      {/* Skills Section */}
      <div className="py-3 border-end borderLight">
        <h5 className="d-flex align-items-center">
          <i className="bi bi-code-slash me-2"></i>
          Skills & Technologies
        </h5>
        <ul className="list-unstyled px-3">
          <li>
            <strong>Frontend:</strong> HTML, CSS, Bootstrap, JavaScript (Vanilla
            & jQuery), React
          </li>
          <li>
            <strong>Backend:</strong> PHP, Laravel, MySQL
          </li>
          <li>
            <strong>Tools:</strong> Git, GitHub, Composer, NPM
          </li>
        </ul>
      </div>
      <div className="text-center dark-mode">
        <p>
          <i className="bi bi-github me-2"></i>
          Check out my latest projects on
          <a
            href="https://github.com/giovannifdipasquale"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info ms-1"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};
