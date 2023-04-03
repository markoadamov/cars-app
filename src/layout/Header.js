import React from "react";
import { Link } from "react-router-dom";
import authService from "../services/AuthService";

export default function Header({ isAuthenticated, setIsAuthenticated }) {
  async function handleLogout() {
    await authService.logout();
    setIsAuthenticated(false);
  }

  return (
    <div>
      <nav className="navigation">
        <div>
          {/* <Link to="/login">
            <button className="navigationButtons">Login</button>
          </Link> */}
          <label> || </label>
          {!isAuthenticated && (
            <Link to="/register">
              <button className="navigationButtons">Register</button>
            </Link>
          )}
          {isAuthenticated && (
              <button className="navigationButtons" onClick={handleLogout}>Logout</button>
          )}
          <label> || </label>
          {!isAuthenticated && (
            <Link to="/login">
              <button className="navigationButtons">Login</button>
            </Link>
          )}
          <label> || </label>
          <Link to="/cars">
            <button className="navigationButtons">Cars</button>
          </Link>
          <label> || </label>
          <Link to="/add">
            <button className="navigationButtons">Add Car</button>
          </Link>
          <label> || </label>
          <Link to="/search">
            <button className="navigationButtons">Search</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
