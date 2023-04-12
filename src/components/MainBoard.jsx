import React from "react";
import s from "./main.module.css";
import dashboard from "./png/dashboard.png";
import transactions from "./png/transactions.png";
import calender from "./png/calendar.png";
import user from "./png/user.png";
import settings from "./png/settings.png";
import { NavLink } from "react-router-dom";

const MainBoard = () => {
  return (
    <div id={s.mainboard_div}>
      <h1>Board.</h1>
      <ul id={s.mainlist}>
        <li>
          <img src={dashboard} alt="" />
          <NavLink to="/dashboard" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <img src={transactions} alt="" />
          <NavLink to="/transactions" activeClassName="active">
            Transactions
          </NavLink>
        </li>
        <li>
          <img src={calender} alt="" />
          <NavLink to="/schedules" activeClassName="active">
            Schedules
          </NavLink>
        </li>
        <li>
          <img src={user} alt="" />
          <NavLink to="/users" activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <img src={settings} alt="" />
          <NavLink to="/settings" activeClassName="active">
            Settings
          </NavLink>
        </li>
      </ul>
      <span className={s.help}>Help</span>
      <span className={s.help}>Contact Us</span>
    </div>
  );
};

export default MainBoard;
