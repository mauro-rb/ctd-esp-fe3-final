import React, { useContext } from "react";
import { GlobalContext } from "../Components/utils/global.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { theme } = useContext(GlobalContext);
  const logoSrc =
    theme === "dark" ? "../images/DH-WHITE.png" : "../images/DH.png";

  return (
    <footer className={`footer ${theme}`}>
      <img src={logoSrc} alt="DH-logo" />
      <div className="social-icons">
        <a
          href="https://www.facebook.com"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.instagram.com"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.tiktok.com"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a
          href="https://www.whatsapp.com"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;