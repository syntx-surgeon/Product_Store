import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import { Route, Routes } from "react-router-dom";
import { useThemeStore } from "./store/useThemeStore.js";

function App() {
  const {theme} = useThemeStore();
  return (
   <div className="min-h-screen bg-base-200 transition-colors duration-300" data-theme={theme}>
    
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Product/:id" element={<ProductPage />} />
    </Routes>
   </div>
  );
}

export default App
