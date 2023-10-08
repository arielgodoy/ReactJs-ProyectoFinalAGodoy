import React from "react";
import { Modal, Spinner } from "react-bootstrap";

function SpinnerModal() {
  return (
    <div>
      <Modal show={true} centered>
        <Modal.Body>
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
            <p>Cargando datos...</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SpinnerModal;
