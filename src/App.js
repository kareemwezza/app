import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TokenContext from "./context/TokenContext";

import Header from "./Header";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Contact from "./Contact";

const App = () => {
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <TokenContext.Provider value={token}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </TokenContext.Provider>
    </BrowserRouter>
  );
};

export default App;
