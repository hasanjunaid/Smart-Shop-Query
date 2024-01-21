import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBox from "./components/SearchBox";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchBox />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
