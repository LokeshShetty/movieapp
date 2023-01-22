import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <form className="login">
        <h3>Sign in to your account</h3>
        <input
          className="email"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          autoComplete="off"
          placeholder="Email/Phone number"
          autoFocus
        />
        <input
          className="pass"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          name="password"
          value={password}
          autoComplete="off"
        />
        <Link to="/home">
          <button className="login-btn" type="submit">
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}
