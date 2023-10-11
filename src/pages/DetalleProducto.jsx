import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import SpinnerModal from "../components/SpinnerModal";
import { Card, Button, Row, Col } from 'react-bootstrap';
import axios from "axios";
import { CartContext } from "../contexts/CartContext";

const DetalleProducto = () => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);
  const [detail, setDetail] = useState();
  const { productid } = useParams();

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
    console.log(cantidad);
  };

  const handleSumar = () => {
    //cantidad < detail.stock && setCantidad(cantidad + 1);
    setCantidad(cantidad + 1);
    console.log(cantidad);
  };

  const handleAgregar = () => {
    agregarAlCarrito(detail, cantidad);
  };

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${productid}`;
    axios
      .get(url)
      .then((response) => {
        setDetail(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, [productid]);

  if (!detail)
    return (
      <>
        <SpinnerModal />
      </>
    );
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
        <Card.Img variant="top" src={detail.image} />
          <Card.Title>{detail.title}</Card.Title>
          <Card.Text>
            {detail.description}
            <h3 className="card-text">Precio: ${detail.price.toFixed(2)}</h3>
          </Card.Text>
          <Row className="justify-content-center align-items-center">
            <Col>
              <Button onClick={handleRestar} variant="danger" size="sm">-</Button>
            </Col>
            <Col>
              <h3>{cantidad}</h3>
            </Col>
            <Col>
              <Button onClick={handleSumar} variant="success" size="sm">+</Button>
            </Col>
          </Row>
          <Row>          
          <Button onClick={handleAgregar} variant="primary" size="md">
            Agregar al carrito
          </Button>          
          </Row>
            
        </Card.Body>
      </Card>
    </div>
  );
};
export default DetalleProducto;
