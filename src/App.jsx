import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Auth from "./auth/Auth";

const App = () => {
  return (
    // <Routes>
    //   <Route exact path="/" Component={Home} />
    //   <Route exact path="/details/:id" Component={ProductDetails} />
    // </Routes>

    <Auth />
  );
};

export default App;
