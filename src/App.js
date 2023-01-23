import React from "react";
import "./App.css";
import Details from "./Components/Details";
import HomeScreen from "./Components/HomeScreen";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<HomeScreen />} />
        <Route exact path="/detail/title/:id" element={<Details />} />
      </Routes>
    </>
  );
}
export default App;
