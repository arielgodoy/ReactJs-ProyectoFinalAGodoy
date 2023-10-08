import React from "react";
import { Modal} from "react-bootstrap";
import logo from "./Navbar/pokeball.png";
import './LogoFlipping.css'

function SpinnerModal() {
  return (
    <div>
      <Modal show={true} centered  style={{ border: "none" }} dialogClassName="border-0"  backdropClassName="bg-transparent"  className="border-0 shadow-none">
        <Modal.Body>          
          <div class="logo-container">
          <img src={logo} alt="Mi Logo" class="flipping-logo"/>
          <br/>
          <p class="loading-text">Cargando datos</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SpinnerModal;
