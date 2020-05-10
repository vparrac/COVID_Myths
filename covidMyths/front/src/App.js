import React, { useState } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import Menu from "./components/Menu";

function App() {
  const [hayUsuario, sethayUsuario] = useState(false);
  
  return (
    <div>
    {hayUsuario?<Menu user={hayUsuario}></Menu>:<Navbar setUsuario={sethayUsuario}></Navbar>}      
    </div>
  );
}

export default App;
