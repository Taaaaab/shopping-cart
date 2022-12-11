import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";

const RouteSwitch = () => {
    return (
        <HashRouter basename='/shopping-cart'>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </HashRouter>
    );
};

export default RouteSwitch;