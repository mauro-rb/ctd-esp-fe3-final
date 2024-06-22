import React, { useState } from "react";

const Form = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
  });

  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      usuario.nombre.trim().length > 5 &&
      /^\S+@\S+\.\S+$/.test(usuario.email)
    ) {
      setExito(true);
      setError(false);
      console.log("Datos:", usuario);
    } else {
      setError(true);
    }
  };

  return (
    <div className="contact-form">
      <h3>Contacto</h3>
      <form onSubmit={handleSubmit}>
        <label>Nombre completo:</label>
        <input
          type="text"
          value={usuario.nombre}
          placeholder="Ingresa tu nombre completo"
          onChange={(event) =>
            setUsuario({ ...usuario, nombre: event.target.value })
          }
        />
        <label>Email:</label>
        <input
          type="email"
          value={usuario.email}
          placeholder="Ingresa tu email"
          onChange={(event) =>
            setUsuario({ ...usuario, email: event.target.value })
          }
        />
        <button className="send" type="submit">Enviar</button>
      </form>
      {error && (
        <div className="formError">
          <p>Por favor verifique su información nuevamente</p>
        </div>
      )}
      {exito && (
        <div className="formExito">
          <p>
            Gracias {usuario.nombre}, te contactaremos cuanto antes vía mail
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;