import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import authService from "../services/AuthService";

export default function AppLogin({ onLogin }) {
  const history = useHistory();
  let defaultState = {
    email: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(defaultState);

  const [invalidCredentials, setInvalidCredentials] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setInvalidCredentials(false);

    try {
      await authService.login(credentials);
      onLogin();
      history.push("/");
    } catch(e) {
        console.log("greska:",e)
      setInvalidCredentials(true);
      alert("invalid credentials");
    }
    console.log("logged in successfully");
  }

  return (
    <div className="AppLogin">
      <form onSubmit={handleSubmit}>
        <label>Login</label>
        <br />
        <input
          placeholder="Email"
          type="text"
          value={credentials.email}
          onChange={(e) => {
            setCredentials({ ...credentials, email: e.target.value });
          }}
          minLength="2"
          required
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          value={credentials.password}
          onChange={(e) => {
            setCredentials({ ...credentials, password: e.target.value });
          }}
          minLength="2"
          required
        />
        {invalidCredentials && (
          <p style={{ color: "red" }}>Invalid credentials</p>
        )}
        <br/>
        <button>Login</button>
      </form>
    </div>
  );
}
