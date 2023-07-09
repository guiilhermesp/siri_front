import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Login from "./Components/Login/Login";
import Produtos from "./Components/Produtos/Produtos";

function App() {
  let location = window.location.pathname;
  let accountType = sessionStorage.getItem("is_admin");
  const [currentPath, setCurrentPath] = React.useState<boolean>();
  const listOfNonSidebarVisible = ["/"];
  const checkIfIncludes = (pathname: string) => {
    return listOfNonSidebarVisible.includes(pathname);
  };
  // let currentPathName = checkIfIncludes(location);

  React.useEffect(() => {
    setCurrentPath(checkIfIncludes(window.location.pathname));
  }, [window.location]);

  return (
    <div className="App">
      <BrowserRouter>
        {!currentPath ? <Sidebar pages={[]} accountType={accountType} /> : null}
        {/* <Header /> */}
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/produtos" element={<Produtos />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
