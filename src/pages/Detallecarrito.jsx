import React, { useContext, useState } from "react";
import { Container, Row, Col, Card, Button, Form, Modal } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import SetUserModal from "../components/setusermodal";
import { UserContext } from "../contexts/UserContext";



const Detallecarrito = () => {
  const [showModal, setShowModal] = useState(false);

  const { precioTotal, vaciarCarrito, cantidadEnCarrito } =
    useContext(CartContext);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleVaciaCarrito = () => {
    setShowModal(false); // Cierra el modal
    vaciarCarrito({});
  };

  const { user } = useContext(UserContext);


  // State to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(!user.id);

  return (
    <>
      <section className="h-100 h-custom bg-light">
        <Container className="py-5 h-100">
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col xs={12}>
              <Card
                className="card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <Card.Body className="p-0">
                  <Row className="g-0">
                    <Col lg={8}>
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Carrito de Compra
                          </h1>
                          <h6 className="mb-0 text-muted">
                            {cantidadEnCarrito()} items
                          </h6>
                        </div>
                        <hr className="my-4" />

                        {/* Agrega aquí tus elementos de carrito */}
                        {/* ... */}

                        <hr className="my-4" />

                        <div className="pt-5">
                          <h6 className="mb-0">
                            <a href="#!" className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2"></i>
                              Volver al Inicio
                            </a>
                          </h6>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4} className="bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Resumen</h3>
                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">
                            items {cantidadEnCarrito()}
                          </h5>
                          <h5>US${precioTotal()}</h5>
                        </div>
                                       

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Precio Total </h5>
                          <h5>US${precioTotal()}</h5>
                        </div>

                        <Button
                          type="button"
                          className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          {user && user.nombre != null && user.correo != null ? (
                            <p>{`User: ${user.nombre}, Correo: ${user.correo}`}</p>
                          ) : (
                            <>
                              <p>Ingrese sus datos para continuar</p>
                              <SetUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

                            </>
                          )}
                        </Button>



                        <Button
                          onClick={handleOpenModal}
                          type="button"
                          className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Vaciar Carrito
                        </Button>



                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Vaciar Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro de que deseas vaciar tu carrito?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleVaciaCarrito}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Detallecarrito;
