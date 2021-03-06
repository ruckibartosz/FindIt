import Home from "./Pages/Home";
import Login from "./Pages/LoginContainer";
import Register from "./Pages/Register";
import RequireAuth from "./Components/RequireAuth";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
