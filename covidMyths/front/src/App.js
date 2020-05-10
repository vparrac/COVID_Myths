import React, { useState } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import Menu from "./components/Menu";

function App() {
  const [hayUsuario, sethayUsuario] = useState(true);
  return (
    <div>
    {hayUsuario?<Menu></Menu>:<Navbar></Navbar>}      
    </div>
  );
}

export default App;
