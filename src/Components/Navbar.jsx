import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Components/utils/global.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { theme, setTheme } = useContext(GlobalContext);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="logoDH">
        <Link className="linkDH" to="/">
          <span style={{ fontWeight: "bold", color: "red" }}>D</span>H Odonto{" "}
        </Link>
      </div>
      <div className="links">
        <Link to="/">
          <h4>Inicio</h4>
        </Link>
        <Link to="/contacto">
          <h4>Contacto</h4>
        </Link>
        <Link to="/favoritos">
          <h4>Favoritos</h4>
        </Link>
        <button onClick={handleThemeChange} className="theme-switch">
          {theme === "dark" ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;