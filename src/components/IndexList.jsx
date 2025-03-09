import { ProjectsPreview } from "./ProjectsPreview";
import { ContactsPreview } from "./ContactsPreview";
import { AboutMePreview } from "./AboutMePreview";

import { useState, useEffect } from "react";
export const IndexList = () => {
  const [visibility1, setVisibility1] = useState(0);
  const [visibility2, setVisibility2] = useState(0);
  const [visibility3, setVisibility3] = useState(0);

  useEffect(() => {
    updateVisibility3();
  }, []);
  const updateVisibility1 = () => {
    if (!visibility1) {
      setVisibility1(1);
      setVisibility2(0);
      setVisibility3(0);
    }
  };
  const updateVisibility2 = () => {
    if (!visibility2) {
      setVisibility2(1);
      setVisibility1(0);
      setVisibility3(0);
    }
  };

  const updateVisibility3 = () => {
    if (!visibility3) {
      setVisibility3(1);
      setVisibility2(0);
      setVisibility1(0);
    }
  };

  return (
    <>
      <div className="index col-3 border-dark border-1 border-top-0 border-bottom-0 border-start-0 border-end">
        <ul className="indexList text-decoration-none list-inline p-3 ms-5 d-flex flex-column justify-content-center h-100">
          <li className="my-5 py-1">
            <h5 className="list-items project-item">
              <span
                className={`list-span ${
                  visibility3 ? "hovered-list-span" : ""
                }`}
                onMouseEnter={updateVisibility3}
              >
                <a
                  className={`no-underline ${
                    visibility3 ? "text-light" : "text-dark"
                  }`}
                  href="/aboutme"
                >
                  {" "}
                  about me{" "}
                </a>
              </span>
            </h5>
          </li>
          <li className="my-5 py-1">
            <h5 className="list-items project-item">
              <span
                className={`list-span ${
                  visibility1 ? "hovered-list-span" : ""
                }`}
                onMouseEnter={updateVisibility1}
              >
                <a
                  className={` ${visibility1 ? "text-light" : "text-dark"}`}
                  href="/projects"
                >
                  {" "}
                  projects{" "}
                </a>
              </span>
            </h5>
          </li>
          <li className="my-5 py-1">
            <h5 className="list-items">
              <span
                className={`list-span ${
                  visibility2 ? "hovered-list-span" : ""
                }`}
                onMouseEnter={updateVisibility2}
              >
                <a
                  className={`no-underline ${
                    visibility2 ? "text-light" : "text-dark"
                  }`}
                  href="/contacts"
                >
                  {" "}
                  contacts{" "}
                </a>
              </span>
            </h5>
          </li>
        </ul>
      </div>
      <div className="col-9 bgDark d-flex flex-column justify-content-center align-items-center">
        <ProjectsPreview
          visibility={visibility1 ? "d-block" : "d-none"}
        ></ProjectsPreview>
        <ContactsPreview
          visibility={visibility2 ? "d-block" : "d-none"}
        ></ContactsPreview>
        <AboutMePreview
          visibility={visibility3 ? "d-block" : "d-none"}
        ></AboutMePreview>
      </div>
    </>
  );
};
