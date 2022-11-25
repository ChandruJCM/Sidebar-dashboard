import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/code.jpg";
import "../Styles/login.css";

function Login() {
  let Navigate = useNavigate();

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }

    if (!validPassword.test(password)) {
      setPwdError(true);
    } else {
      setPwdError(false);
    }
    if (email === "Chand14@gmail.com" && password === "Chandru@123") {
      Navigate("/sidebar");
    } else {
      alert("Check Your Email and Password");
    }
  };
  return (
    <div className="body container-fluid bg-light d-flex">
      <div className="img  col-sm-0 col-xs-0 d-flex">
        <img
          src={image}
          className="img-fluid d-none d-md-block"
          alt="Coding Portal"
        />
      </div>
      <div className="main justify-content-center user-select-auto  d-flex flex-column col-md-6 col-sm-12 col-xs-12 bg-dark ">
        <h1 className="header text-center  text-light ">
          {" "}
          Welcome to <span className="text-success">Coding</span> Portal
        </h1>
        <div className="login me-sm-4 me-xs-4 mb-5  d-flex flex-column w-50 ">
          <label className="text-light ms-5">Email</label>
          <input
            type="email"
            className="ms-5"
            name="Email"
            placeholder="Username (or) Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailErr ? <p>Your email is invalid </p> : ""}
          <label className="text-light ms-5">Password</label>
          <input
            type="password"
            className="ms-5"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {pwdError ? <p>Your password is invalid</p> : ""}
          <button
            className="button btn-lg btn text-light bg-success"
            onClick={validate}
          >
            Let's code
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
