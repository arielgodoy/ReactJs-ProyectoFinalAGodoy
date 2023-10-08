import React from "react";
import { Modal} from "react-bootstrap";
import logo from "../Navbar/pokeball.png";
import './../Loaders/LogoFlipping.css'

function SpinnerModal() {
  return (
    <div>
      <Modal show={true} centered >
        <Modal.Body>          
          <div class="logo-container">
          <img src={logo} alt="Logo flipping" class="flipping-logo"/>
          <br/>
          <p class="loading-text">Cargando datos</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SpinnerModal;
