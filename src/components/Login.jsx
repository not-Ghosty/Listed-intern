import React from "react";
import s from "./main.module.css";
import search from "./png/search.png";
import apple from "./png/apple.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div id={s.login}>
      <section id={s.card}>
        <h1>Sign In</h1>
        <p id={s.sign}>Sign in to your account</p>
        <div id={s.goap_div}>
          <span>
            <img src={search} alt="" />
            Sign in with Google
          </span>
          <span>
            <img src={apple} alt="" />
            Sign in with Apple
          </span>
        </div>
        <div id={s.details}>
          <label htmlFor="">Email address</label> <br />
          <input type="text" /> <br />
          <label htmlFor="">Password</label> <br />
          <input type="password" /> <br />
          <p>Forgot password?</p>
          <button>
            {" "}
            <Link to="/dashboard">Sign in</Link>{" "}
          </button>
        </div>
        <p id={s.last}>
          Dont have and account? <span id={s.register}>Register here</span>{" "}
        </p>
      </section>
    </div>
  );
};

export default Login;
