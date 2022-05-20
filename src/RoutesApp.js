import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Repositories from "./pages/Repositories";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/repositories" element={<Repositories/>} />
      </Routes>
    </BrowserRouter>
  );
}
