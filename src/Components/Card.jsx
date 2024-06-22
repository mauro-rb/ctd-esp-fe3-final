import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./utils/global.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTimes } from "@fortawesome/free-solid-svg-icons";

const Card = ({ dentist }) => {
  const { theme, addFavoriteDentist, removeFavoriteDentist, favDentists } =
    useContext(GlobalContext);
  const isFavorited = favDentists.some((fav) => fav.id === dentist.id);

  const handleFavClick = () => {
    if (isFavorited) {
      removeFavoriteDentist(dentist.id);
    } else {
      addFavoriteDentist(dentist);
    }
  };

  return (
    <div className={`card ${theme}`}>
      <Link to={`/dentista/${dentist.id}`}>
      <img src="/images/doctor.jpg" alt="Imagen de un doctor" />
      <strong>{dentist.name}</strong>
      <p>{dentist.username}</p>
      </Link>
      <button onClick={handleFavClick} className="favButton">
        <FontAwesomeIcon icon={isFavorited ? faTimes : faStar} />
      </button>
    </div>
  );
};

export default Card;