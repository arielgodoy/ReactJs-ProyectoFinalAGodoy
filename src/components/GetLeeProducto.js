import { useNavigate  } from 'react-router-dom';
import React from 'react'

const GetLeeProducto = ( { producto } )=> {
    const navigate = useNavigate();
    

    const handleClick = () => {
        navigate(`/DetalleProducto/${producto.id}`);
    };

    return (
        <> 
        <div className="col-md-2 mb-2">
            <div className="card">
                <img src={producto.image} className="card-img-top img-fluid" alt={producto.title} />
                <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>
                    {/* <p className="card-text">{producto.description}</p> */}
                    <p className="card-text">Precio: ${producto.price.toFixed(2)}</p>
                    <button onClick={handleClick}  className="btn btn-info">Ver Detalle</button>                    
                </div>
            </div>
            </div>       
        </>


    )
}

export default GetLeeProducto;