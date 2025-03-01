export const ContactsPreview = (props) => {
  return (
    <div className={`${props.visibility}`}>
      {/* Title */}
      <div className="text-center">
        <h1 className="mb-5 text-light">contacts preview</h1>
      </div>

      {/* Contacts Section */}
      <div className="contacts-div px-5 pt-3 pb-3 border-bottom borderLight">
        <div className="py-2">
          <h5>
            <span className="light-mode">contacts</span>
          </h5>
        </div>
        <div className="px-3">
          <p className="text-light">
            <i className="bi bi-envelope me-2"></i>
            giovanni.francesco97@gmail.com
          </p>
          <p className="text-light">
            <i className="bi bi-phone me-2"></i>
            +39 349xxxxxxxxx
          </p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="socials-div px-5 pt-3 pb-3 border-bottom  borderLight">
        <div className="py-1">
          <h5>
            <span className="light-mode">social media</span>
          </h5>
        </div>
        <div>
          <p className="px-3">
            <i className="bi bi-linkedin me-2 text-light"></i>
            <a
              href="https://www.linkedin.com/in/giovannifdipasquale"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light no-underline"
            >
              linkedin
            </a>
          </p>
          <p className="px-3">
            <i className="bi bi-github me-2 text-light"></i>
            <a
              href="https://github.com/giovannifdipasquale"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light no-underline"
            >
              github
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
        <div>
          <p className="px-3">
            <i className="bi bi-file-earmark-text me-2 text-light"></i>
            <a
              href="/path-to-your-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light no-underline"
            >
              Download CV
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
