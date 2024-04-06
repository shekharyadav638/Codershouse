import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const logostyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };

  const logoText = {
    marginLeft: "10px",
  };

  function logoutUser() {
    localStorage.removeItem("auth");
    window.location.href = "/login";
  }

  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={logostyle} to="/">
        <img src="/images/logo.png" alt="logo" />
        <span style={logoText}>Codershouse</span>
      </Link>
      <button onClick={logoutUser}>Logout</button>
    </nav>
  );
};

export default Navigation;
