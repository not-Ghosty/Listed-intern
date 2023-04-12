import React from "react";
import Board from "./components/Board";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";

const App = () => {
  return (
    <div id="app" style={{ display: "flex" }}>
      <BrowserRouter>
        <Board />
        <Login />
        <Routes>
          <Route path="/dashboard" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
