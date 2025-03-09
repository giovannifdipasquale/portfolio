export const Contacts = () => {
  return (
    <div className={`dark-mode rounded-lg shadow-lg`}>
      <h1 className="py-1 px-3 text-center"> Contacts </h1>
      {/* Home Button */}
      <span className="homeButton">
        <a href="/" className="anchor-class">
          /home
        </a>
      </span>

      {/* Contacts Section */}

      <div className="contacts-div px-5 pt-3 pb-3 border-bottom borderDark">
        <div className="py-1">
          <h5>
            <span className="light-mode">Contacts</span>
          </h5>
        </div>
        <div className="px-3">
          <p>
            <i className="fs-5 bi bi-envelope me-2"></i>
            <strong>Email:</strong> giovanni.francesco97@gmail.com
          </p>
          <p>
            <i className="fs-5 bi bi-telephone me-2"></i>
            <strong>Phone:</strong> +39 3493360996
          </p>
          <p>
            <i className="fs-5 bi bi-geo-alt me-2"></i>
            <strong>Address:</strong> Bologna, Italy
          </p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="socials-div px-5 pt-3 pb-3 border-bottom borderDark">
        <div className="py-1">
          <h5>
            <span className="light-mode">Social Media</span>
          </h5>
        </div>
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
        <div className="py-1">
          <h5>
            <span className="light-mode">My CV</span>
          </h5>
        </div>
        <div className="px-3">
          <p>
            <i className="fs-5 bi bi-file-earmark-text me-2"></i>
            <a
              href="../src/assets/cv_aggiornato.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-class"
            >
              Download Cv IT
            </a>
          </p>
          <p>
            <i className="fs-5 bi bi-file-earmark-text me-2"></i>
            <a
              href="../src/assets/cv_eng_dipasquale.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-class"
            >
              Download Cv EN
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
