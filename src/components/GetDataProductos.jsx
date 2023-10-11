import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GetLeeProducto from "./GetLeeProducto";
import SpinnerModal from "./SpinnerModal";

function GetDataProductos() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    // Función para obtener los productos desde la FakeStore API
    // si categoria esta vacia carga prudctos en general
    const fetchProducts = async () => {
      try {
        setLoading(true);        
        console.log(categoria);
        const url = categoria ? `https://fakestoreapi.com/products/category/${categoria}` : 'https://fakestoreapi.com/products'
        const response = await axios.get(url);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };    
    fetchProducts();
  }, [categoria]);

  return (
    <>
      {/* spinner cargando hasta que se resuelve el fetch de la API */}
      {loading && (
        <SpinnerModal/>
      )}      
      <div className="container mt-3">
        <h2>Productos</h2>
        <div className="row">
          {!loading &&
            products.map((prod) => (
              <GetLeeProducto producto={prod} key={prod.id} />
            ))}
        </div>
      </div>
    </>
  );
}

export default GetDataProductos;
