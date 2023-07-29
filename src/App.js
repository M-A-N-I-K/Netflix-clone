import React from "react"
import './App.css';
import Navbar from "./Components/utils/Navbar";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
