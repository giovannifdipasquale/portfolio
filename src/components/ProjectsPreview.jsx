export const ProjectsPreview = (props) => {
  return (
    <div className={`${props.visibility} `}>
      {/* GitHub profile link */}
      <div className="github-link px-5 pt-3 pb-3 border-bottom borderLight">
        <div className="text-center">
          <h1 className="mb-5 text-light">projects preview</h1>
        </div>
        <div className="py-1"></div>
        <div>
          <p className="px-3">
            <i className="bi bi-github me-2 text-light"></i>
            <a
              href="https://github.com/giovannifdipasquale"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light no-underline"
            >
              github.com/giovannifdipasquale
            </a>
          </p>
        </div>
      </div>

      {/* Front-end projects */}
      <div className="px-5 pt-3 pb-3 border-bottom borderLight">
        <div className="py-1">
          <h5>
            <span className="light-mode">front-end</span>
          </h5>
        </div>
        <div>
          <p className="px-3">
            <i className="bi bi-palette me-2 text-light"></i>
            <a
              href="https://github.com/giovannifdipasquale/artstore-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light no-underline"
            >
              Art Store
            </a>
          </p>
          <p className="px-3">
            <i className="bi bi-cloud-sun me-2 text-light"></i>
            <a
              href="https://github.com/giovannifdipasquale/weather_fetch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light no-underline"
            >
              Weather Fetch
            </a>
          </p>
        </div>
      </div>

      {/* Back-end / Full-stack projects */}
      <div className="backend-div px-5 pt-3 pb-3">
        <div className="py-1">
          <h5>
            <span className="light-mode">back-end / full-stack </span>
          </h5>
        </div>
        <div>
          <p className="px-3">
            <i className="bi bi-stars me-2 text-light"></i>
            <a
              href="https://github.com/giovannifdipasquale/ai-sentiment-analyzer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light no-underline"
            >
              AI Sentiment Analysis
            </a>
          </p>
          <p className="px-3">
            <i className="bi bi-cart me-2 text-light"></i>
            <a
              href="https://github.com/giovannifdipasquale/presto.it_project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light no-underline"
            >
              Presto.it Project
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
