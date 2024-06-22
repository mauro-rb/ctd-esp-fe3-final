import React, { useContext } from "react";
import { GlobalContext } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Favs = () => {
  const { favDentists } = useContext(GlobalContext);
  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {favDentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </>
  );
};

export default Favs;
