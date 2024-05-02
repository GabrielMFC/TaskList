import React from "react";
import ReactDOM from "react-dom/client";
import RedLine from "./Linhas/linhas";
import LinhaAzul from "./Linhas/linhaazul";
import "./bootstrap.min.css";
import NavBar from "./Navegation/nav";
import AddPage from "./addPage/addPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar/>
    <RedLine/>
    <LinhaAzul/>
    <AddPage/>
  </React.StrictMode>
);