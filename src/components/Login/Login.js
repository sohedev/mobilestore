import React, { useState } from "react";
import "./Login.style.css";
import logo from "../../assets/logo.png";

import { Link, useHistory } from "react-router-dom";

import { auth } from "../firebase/firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => setError(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="login">
      <Link style={{ textDecoration: "none" }} to="/">
        <img alt="mobilestore" className="login__logo" src={logo} />
      </Link>
      <div className="login__error">{error ? <h6> {error}</h6> : null}</div>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form className="login__form">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>By signing-in you agree to terms and conditions of Mobile Store</p>

        <button onClick={register} className="login__registerButton">
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
