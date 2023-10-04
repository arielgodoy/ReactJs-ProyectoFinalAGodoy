import React, { useEffect, useState } from "react";
import axios from "axios";
import LeeProducto from "./LeeProducto";
import { useParams } from "react-router-dom";

const DataProductosFiltered = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();
  // cuando "categoria" cambia por useparams dispara el useEffect si no se carga sol la primera vez
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const url = categoria ? `https://fakestoreapi.com/products/category/${categoria}` : 'https://fakestoreapi.com/products'
        const response = await axios.get(url);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }finally{
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoria]); //>>> disparado por useParams

  return (
    <div className="container mt-3">
      <h2>Productos</h2>
      <div className="row">
        {loading ? (
          <div className="spinner">
            <div className="spinner-border" role="status"></div>
          </div>
        ) : (
          <>
            {products.map((prod) => (
              <LeeProducto producto={prod} key={prod.id} />
            ))}            
          </>
        )}
      </div>
    </div>
    
  );
};
export default DataProductosFiltered;
