import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../index";

function GetCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const categoriasRef = collection(db, "categories");
    getDocs(categoriasRef)
      .then((resp) => {
        setLoading(false);
        setCategories(
          resp.docs.map((doc) => {
            console.log(doc.data().category)            
            return { ...doc.data(), nombre: doc.category,id: doc.id };
          })
        );
      });
  }, []);

  return (
    <>
      {loading ? (
        <p>Cargando categorías al Menú...</p>
      ) : (
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                className="dropdown-item"
                to={`/categoria/${category.category}`} // Usar el campo "id" o el campo adecuado en lugar de "category"
              >
                {category.category} {/* Asegúrate de usar el campo correcto de la categoría */}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default GetCategories;
