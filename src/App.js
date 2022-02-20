import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TokenContext from "./context/TokenContext";

import Header from "./Header";
import Home from "./Home";
import Login from "./Login";

const App = () => {
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <TokenContext.Provider value={token}>
        <Header />
        <Routes>
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </TokenContext.Provider>
    </BrowserRouter>
  );
};

export default App;
