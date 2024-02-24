import "../Header/Header.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../../Assets/Images/logo.svg";

export default function Header({Route1, Route2 , Button1 , Button2 }) {
  const naviagte = useNavigate();
  
  const [activeLink, setActiveLink] = useState("");
  const updateActiveLink = (linkName , path) => {
    setActiveLink(linkName);
    naviagte(path);
  };
  useEffect(() => {
    setActiveLink(Button1);
  }, [Button1]);

  return (
    <header className={`header ${"header-outside"}`}>
      <div className="header__container">
        <nav className="header__logo-container" onClick={() => updateActiveLink("HomePage" ,`/` )}>
         
            <span className="header__logo">
              <img src={Logo} alt="Logo" />
            </span>
        
        </nav>

        <nav className="header__nav-bar">
          
          <div
            className={`header__state ${
              activeLink === Button1
                ? "header__active-nav-item"
                : "header__nav-link--inactive"
            }`}
            onClick={() => updateActiveLink(Button1, `/${Route1}`)}
          >
            
              <h3 className="header__nav-link">{Button1}</h3>
          
          </div>

          <div
            className={`header__state ${
              activeLink === Button2 ? "header__active-nav-item" : "header__nav-link--inactive"
            }`}
            onClick={() => updateActiveLink(Button2, `/${Route2}`)}
          >
            
              <h3 className="header__nav-link">{Button2}</h3>
         
          </div>
        </nav>
      </div>
    </header>
  );
}
