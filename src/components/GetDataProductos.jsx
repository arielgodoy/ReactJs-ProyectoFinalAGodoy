import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import GetLeeProducto from "./GetLeeProducto";
import SpinnerModal from "./SpinnerModal";
import { db } from "../services/firebase";
import { collection, getDocs,query,where  } from 'firebase/firestore';



function GetDataProductos() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    const fetchProductsFromFirestore = async () => {
      try {
        setLoading(true);
  
        if (categoria) {
          // Si hay una categoría, busca en Firestore por esa categoría
          const itemsCollection = collection(db, 'items');
          const categoryQuery = query(itemsCollection, where('category', '==', categoria));
          const querySnapshot = await getDocs(categoryQuery);
  
          const productsData = [];
          querySnapshot.forEach((doc) => {
            productsData.push({ id: doc.id, ...doc.data() });
          });
  
          setProducts(productsData);
        } else {
          // Si no hay una categoría, trae todos los productos desde Firestore Sin Filtro
          const itemsCollection = collection(db, 'items');
          const querySnapshot = await getDocs(itemsCollection);
  
          const productsData = [];
          querySnapshot.forEach((doc) => {
            productsData.push({ id: doc.id, ...doc.data() });
          });
  
          setProducts(productsData);
        }
  
        setLoading(false);
      } catch (error) {
        console.error('Error leyendo productos desde Firestore:', error);
      }
    };
  
    fetchProductsFromFirestore();
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





//import axios from "axios";
// useeffect que lee desde fakestore!!
// useEffect(() => {
//   // Función para obtener los productos desde la FakeStore API
//   // si categoria esta vacia carga productos en general
//   const fetchProducts = async () => {
//     try {
//       setLoading(true);
//       console.log(categoria);
//       const url = categoria ? `https://fakestoreapi.com/products/category/${categoria}` : 'https://fakestoreapi.com/products';
      
//       // Configura un tiempo de espera (timeout) en milisegundos, por ejemplo, 5000 ms (5 segundos)
//       const timeout = 5000;

//       const response = await Promise.race([
//         axios.get(url),
//         new Promise((_, reject) => setTimeout(() => reject("Timeout"), timeout))
//       ]);

//       if (response === "Timeout") {
//         throw new Error("Request timed out");
//         setLoading(false);
//       }

//       setProducts(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   fetchProducts();
// }, [categoria]);