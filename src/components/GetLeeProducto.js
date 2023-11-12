import { useNavigate  } from 'react-router-dom';
import React from 'react'
import { itemServices } from "../services/items";

const GetLeeProducto =  ( { producto } )=> {
    const navigate = useNavigate();    

    const handleClick = () => {
        navigate(`/DetalleProducto/${producto.id}`);
    };
    const handleFirestore = async() => {        
        await itemServices.addItem(producto);
    };
    return (
        <> 
        <div className="col-md-2 mb-2">
            <div className="card">
                <img src={producto.image} className="card-img-top img-fluid" alt={producto.title} />
                <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>                    
                    <p className="card-text">Precio: ${producto.price.toFixed(2)}</p>
                    <button onClick={handleClick}  className="btn btn-info">Ver Detalle</button>                    
                    <button onClick={handleFirestore}  className="btn btn-info">Agrega a Firestore</button>
                </div>
            </div>
            </div>       
        </>


    )
}

export default GetLeeProducto;