import "../Header/Header.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../../Assets/Images/logo.svg";

export default function HeaderApplicant() {
  const [activeLink, setActiveLink] = useState("");
  const updateActiveLink = (linkName) => {
    setActiveLink(linkName);
  };
  useEffect(() => {
    setActiveLink("JobList");
  }, []);

  return (
    <header className={`header ${"header-outside"}`}>
      <div className="header__container">
        <nav className="header__logo-container">
          <Link to={`/applicant/jobs-page`} >
            <span className="header__logo">
              <img src={Logo} alt="Logo" />
            </span>
          </Link>
        </nav>

        <nav className="header__nav-bar">
        <div
            className={`header__state ${
              activeLink === "Logout"
                ? "header__active-nav-item"
                : "header__nav-link--inactive"
            }`}
          >
            <Link
              to={`/`}
              onClick={() => updateActiveLink("Logout")}
              className="text-decor"
            >
              <h3 className="header__nav-link">Logout</h3>
            </Link>
          </div>
          
        </nav>
      </div>
    </header>
  );
}
