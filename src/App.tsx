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
import ReceiveReport from "./Pages/ReceiveReport/ReceiveReport";
import DispatchReport from "./Pages/DispatchReport/DispatchReport";
import Category from "./Pages/Category/Category";
import SupplierOrder from "./Pages/SupplierOrder/SupplierOrder";
import Protocols from "./Pages/Protocols/Protocols";
import Supplier from "./Pages/Supplier/Supplier";
import MaterialOrder from "./Pages/MaterialOrder/MaterialOrder";
import BiddingExemption from "./Pages/BiddingExemption/BiddingExemption";
import AccountantReport from "./Pages/AccountantReport/AccountantReport";

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
            <Route path="/guias-de-entrada" element={<ReceiveReport />} />
            <Route path="/guias-de-saida" element={<DispatchReport />} />
            <Route path="/categorias" element={<Category />} />
            <Route path="/pedidos-fornecedor" element={<SupplierOrder />} />
            <Route path="/atas" element={<Protocols />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/pedido-de-af" element={<MaterialOrder />} />
            <Route
              path="/dispensa-de-licitacao"
              element={<BiddingExemption />}
            />
            <Route path="/fornecedores" element={<Supplier />} />
            <Route path="/inventario-do-almoxarifado" element={<Warehouse />} />
            <Route path="/medidas" element={<Measure />} />
            <Route path="/relatorio-de-estoque" element={<StockReport />} />
            <Route
              path="/relatorio-do-contador"
              element={<AccountantReport />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
