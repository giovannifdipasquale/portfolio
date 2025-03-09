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
            +39 3493360996
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
              className="text-light no-underline anchor-class"
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
              className="text-light no-underline anchor-class"
            >
              github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
