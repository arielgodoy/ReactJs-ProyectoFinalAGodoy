import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";
import CartWidget from "./CartWidget";
import GetCategories from "./GetCategories";
import UserWidget from "./UserWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            src={logo}
            alt="El logo de mi Tienda Falsa"
            width="50"
            height="50"
            className="d-inline-block align-left"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="productoCategoriaDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categorias
              </NavLink>
              <div
                className="dropdown-menu"
                aria-labelledby="productoCategoriaDropdown"
              >
                 <GetCategories />
              </div>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link disabled" to="/Ofertas">
                Ofertas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link disabled" to="/Avance">
                Avance de Temporada
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Carrito">
                
              </NavLink>
            </li>
            <li className="nav-item">
              
              <NavLink className="nav-link" to="/Carrito">
                <i className="fa fa-shopping-cart"></i>{" "}               
                
                <CartWidget />
                <UserWidget/>
                </NavLink>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
