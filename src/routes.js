import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Repositories from "./Repositories";

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/repositories" element={Repositories} />
      </Routes>
    </BrowserRouter>
  );
}
