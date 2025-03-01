export const Projects = () => {
  return (
    <div className={`dark-mode`}>
      <span className="homeButton">
        {" "}
        <a href="/" className="anchor-class">
          {" "}
          /home{" "}
        </a>
      </span>{" "}
      <h1 className="py-1 px-3 text-center"> Projects </h1>
      <div className="projects-div px-5 pt-3 pb-3 border-bottom borderDark">
        <div className="px-3">
          <p>
            <i className="fs-5 bi bi-github me-2"></i>
            <a
              href="https://github.com/giovannifdipasquale"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-class"
            >
              My GitHub Profile
            </a>
          </p>
        </div>
      </div>
      <div className="frontend-div px-5 pt-3 pb-3 border-bottom borderDark">
        <div className="py-1">
          <h5>
            <span className="light-mode">Front-end Projects</span>
          </h5>
        </div>
        <div className="px-3">
          <p>
            <i className="fs-5 bi bi-palette me-2"></i>{" "}
            <strong>Art Store</strong> – A responsive landing page for selling
            artworks, featuring interactivity and animations.
            <br />
            <strong>Tech:</strong> HTML, CSS, JavaScript, Bootstrap, AOS, Swiper
            <br />
            <a
              href="https://github.com/giovannifdipasquale/artstore-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-class"
            >
              View on GitHub
            </a>
          </p>

          <p>
            <i className="fs-5 bi bi-cloud-sun me-2"></i>{" "}
            <strong>Weather Fetch</strong> – A React app that uses
            OpenWeatherMap API to fetch and display real-time weather data,
            including temperature, humidity, wind speed, and pressure,
            structured with Bootstrap.
            <br />
            <strong>Tech:</strong> NPM, JavaScript, Bootstrap, React, Vite,
            OpenWeatherMap API
            <br />
            <a
              href="https://github.com/giovannifdipasquale/weather_fetch"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-class"
            >
              View on GitHub
            </a>
          </p>
        </div>
      </div>
      <div className="backend-div px-5 pt-3 pb-3">
        <div className="py-1">
          <h5>
            <span className="light-mode">Back-end / Full-stack Projects</span>
          </h5>
        </div>
        <div className="px-3">
          <p>
            <i className="fs-5 bi bi-stars me-2"></i>{" "}
            <strong>AI Sentiment Analysis</strong> – A Laravel-based Sentiment
            Analysis App developed using Hugging Face API to analyze text
            sentiment.
            <br />
            <strong>Tech:</strong> HTML, CSS, JavaScript, Bootstrap; PHP,
            Laravel, Blade, Vite, Hugging Face API
            <br />
            <a
              href="https://github.com/giovannifdipasquale/ai-sentiment-analyzer"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-class"
            >
              View on GitHub
            </a>
          </p>

          <p>
            <i className="fs-5 bi bi-cart me-2"></i> <strong>Presto.it</strong>{" "}
            – A marketplace platform that allows users to create and manage
            listings.
            <br />
            <strong>Tech:</strong> HTML, CSS, JavaScript, Bootstrap; PHP,
            Laravel, Blade, Vite, MySQL, Google Vision API
            <br />
            <a
              href="https://github.com/giovannifdipasquale/presto.it_project"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-class"
            >
              View on GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
