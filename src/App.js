import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el archivo CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importar el archivo JavaScript de Bootstrap
import 'font-awesome/css/font-awesome.min.css';
import Navbar from "./components/Navbar/Navbar";
import DetalleProducto from "./pages/DetalleProducto";
import DataProductosFiltered from "./Data/DataProductosFiltered";
import './App.css'
import { CartProvider } from "./contexts/CartContext";


function App() {
  return (
    
    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ofertas" element={<Home />} />
        <Route path="/Avances" element={<Home />} />        
        <Route path="/DetalleProducto/:productid" element={<DetalleProducto />} />
        <Route path="/categoria/" element={<DataProductosFiltered/>} />   
        <Route path="/categoria/:categoria" element={<DataProductosFiltered/>} />   
        

      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
