import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el archivo CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importar el archivo JavaScript de Bootstrap
import 'font-awesome/css/font-awesome.min.css';
import Navbar from "./components/Navbar";
import DetalleProducto from "./pages/DetalleProducto";
import './App.css'
import { CartProvider } from "./contexts/CartContext";
import DataProductos from "./components/GetDataProductos";
import Detallecarrito from "./pages/Detallecarrito";
import AddItem from "./components/addItem";
import { UserProvider } from "./contexts/UserContext";




function App() {
  return (
    
    <CartProvider>
      <UserProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ofertas" element={<Home />} />
        <Route path="/Avances" element={<Home />} />        
        <Route path="/carrito" element={<Detallecarrito />} />        
        <Route path="/DetalleProducto/:productid" element={<DetalleProducto />} />
        <Route path="/categoria/" element={<DataProductos/>} />   
        <Route path="/categoria/:categoria" element={<DataProductos/>} />  
        <Route path="/add/item" element={<AddItem/>} />  

      </Routes>
    </BrowserRouter>
    </UserProvider>
    </CartProvider>
  );
}

export default App;
