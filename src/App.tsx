import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Login from "./Pages/Login/Login";
import Products from "./Pages/Products/Products";
import Stock from "./Pages/Stock/Stock";
import Warehouse from "./Pages/Warehouse/Warehouse";
import Measure from "./Pages/Measure/Measure";
import Sector from "./Pages/Sector/Sector";
import StockReport from "./Pages/StockReport/StockReport";
import Request from "./Pages/Order/Order";
import Invoice from "./Pages/Invoice/Invoice";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/pedidos" element={<Request />} />
            <Route path="/estoque" element={<Stock />} />
            <Route path="/setores" element={<Sector />} />
            <Route path="/controle-de-notas" element={<Invoice />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/inventario-do-almoxarifado" element={<Warehouse />} />
            <Route path="/medidas" element={<Measure />} />
            <Route path="/relatorio-de-estoque" element={<StockReport />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
