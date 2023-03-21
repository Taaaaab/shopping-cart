import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";

const RouteSwitch = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};

export default RouteSwitch;
