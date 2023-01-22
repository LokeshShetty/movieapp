import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [search, setSearch] = useState("");
  return (
    <div className="nav-contents">
      <div>
        <img
          className="nav-logo"
          src="https://logodix.com/logo/265538.png"
          alt="logo"
        />
      </div>
      <div className="list">
        <ul className="nav-list">
          {window.location.pathname !== "/home" && (
            <li>
              <input
                className="search"
                type="text"
                value={search}
                name="name"
                placeholder="search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </li>
          )}
          <li>
            <Link className="home" to="/home">
              Home
            </Link>
          </li>
          <li>
            <a href="/">Language</a>
          </li>
          <li>
            <a href="/">Genre</a>
          </li>
          <li>
            <a href="/">Account</a>
          </li>
          {window.location.pathname === "/home" && (
            <li className="icon">
              <img style={{ width: "20px" }} src="searchicon.png" alt="img" />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
