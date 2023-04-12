import React from "react";
import s from "./main.module.css";
import MainBoard from "./MainBoard";
import Dashboard from "./Dashboard";

const Main = () => {
  return (
    <div id={s.main_div}>
      <MainBoard />
      <Dashboard />
    </div>
  );
};

export default Main;
