import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../Components/utils/global.context";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { getDentistById, dentist } = useContext(GlobalContext);

  useEffect(() => {
    getDentistById(id);
  }, [id, getDentistById]);

  return (
    <>
      <div className="dentist-detail">
        {dentist && (
          <table>
            <tbody>
              <tr>
                <th>Nombre</th>
                <td>{dentist.name}</td>
              </tr>
              <tr>
                <th>Correo</th>
                <td>{dentist.email}</td>
              </tr>
              <tr>
                <th>Teléfono</th>
                <td>{dentist.phone}</td>
              </tr>
              <tr>
                <th>Página web</th>
                <td>{dentist.website}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Detail;