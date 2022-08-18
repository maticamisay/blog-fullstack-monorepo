import React from "react";
import { Container } from "react-bootstrap";
import "../Styles/Profile.css";
const Profile = () => {
  return (
    <Container>
      <div className="profile">
        <h1 className="profile-title">Mi perfil</h1>
        <div className="profile-container">
          <div className="profile-container-data">
            <div className="user-data">
              <h3>Nombre de usuario</h3>
              <p>nombre</p>
            </div>
            {/* <button>Editar</button> */}
          </div>
          <div className="profile-container-data">
            <div className="user-data">
              <h3>Dirección de correo</h3>
              <p>juanito@hotmail.com</p>
            </div>
            {/* <button>Editar</button> */}
          </div>
          {/* <div className="profile-container-data">
            <div className="user-data">
              <h3>Contraseña</h3>
              <p>********</p>
            </div>
            <button>Editar</button>
          </div> */}
        </div>
      </div>
    </Container>
  );
};

export default Profile;
