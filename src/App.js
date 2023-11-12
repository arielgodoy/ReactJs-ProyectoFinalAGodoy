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
import withAuth from '../src/hocs/withAuth'; // Ajusta la ruta correcta según tu estructura de archivos
import Profile from './components/Profile'; // Ajusta la ruta correcta según tu estructura de archivos
import AddItem from "./components/addItem";



function App() {
  return (
    
    <CartProvider>
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
    </CartProvider>
  );
}

export default App;
