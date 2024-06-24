import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Started from "./components/Started/Started";
import BuyerSignUp from "./Pages/Auth/Buyer/BuyerSignUp";
import SellerSignUp from "./Pages/Auth/Seller/SellerSignUp";
// import SellerDashboard from "./Pages/UserPage/SellerDashboard/SellerDashboard";
import SellerDashboard from "./Pages/UserPage/SellerDashboard/SellerDashboard/SellerDashboard";
import ProductCreation from "./Pages/UserPage/General/ProductCreation/ProductCreation";
import ProductCreationSuccess from "./Pages/UserPage/General/ProductCreationSucces/ProductCreationSuccess";
import Products from "./Pages/UserPage/General/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/getStarted" element={<Started />} />
        <Route path="/buyerSignUp" element={<BuyerSignUp />} />
        <Route path="/sellerSignUp" element={<SellerSignUp />} />
        <Route path="/sellerDashboard" element={<SellerDashboard />} />
        <Route path="/productCreation" element={<ProductCreation />} />
        <Route path="/productCreationSuccess" element={<ProductCreationSuccess />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
