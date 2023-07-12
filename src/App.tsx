import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Login from "./Components/Login/Login";
import Produtos from "./Components/Produtos/Produtos";
import { useDispatch } from "react-redux";
import { fetchMe } from "./Services/Slices/meSlice";

function App() {
  let location = window.location.pathname;
  const dispatch = useDispatch();
  const [accountType, setAccountType] = React.useState<boolean>();
  const [currentPath, setCurrentPath] = React.useState<boolean>();
  const listOfNonSidebarVisible = ["/"];
  const checkIfIncludes = (pathname: string) => {
    return listOfNonSidebarVisible.includes(pathname);
  };
  const converter = sessionStorage.getItem("me");
  const me = JSON.parse(converter as string);
  // let currentPathName = checkIfIncludes(location);

  React.useEffect(() => {
    setCurrentPath(checkIfIncludes(location));
  }, [window.location]);

  React.useEffect(() => {
    setAccountType(me?.is_admin);
  }, [me]);

  return (
    <div className="App">
      <BrowserRouter>
        {accountType && <Sidebar pages={[]} accountType={accountType} />}
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
