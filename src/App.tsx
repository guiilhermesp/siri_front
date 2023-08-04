import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Login from "./Components/Login/Login";
import Produtos from "./Components/Produtos/Produtos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/produtos" element={<Produtos />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
