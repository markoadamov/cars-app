import { useState } from "react";
import { useHistory } from "react-router-dom";
import authService from "../services/AuthService";

export default function AppRegister({ onRegister }) {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    name: "",
  });

  const [invalidCredentials, setInvalidCredentials] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setInvalidCredentials(false);

    try {
    //console.log(credentials);
      await authService.register(credentials);
      history.push("/");
      onRegister();
    } catch {
      setInvalidCredentials(true);
      alert("invalid credentials");
    }
    console.log("Registered and logged in successfully");
  }

  return (
    <div className="AppRegister">
      <h2>Register</h2>
      <form
        // style={{ display: "flex", flexDirection: "column", width: 300 }}  Ovako mogu dodati style
        onSubmit={handleSubmit}
      >
        <input
          required
          value={credentials.name}
          placeholder="Name"
          onChange={({ target }) =>
            setCredentials({ ...credentials, name: target.value })
          }
        />
        <br/>
        <input
          required
          value={credentials.email}
          type="email"
          placeholder="Email"
          onChange={({ target }) =>
            setCredentials({ ...credentials, email: target.value })
          }
        />
        <br/>
        <input
          required
          value={credentials.password}
          type="password"
          placeholder="Password"
          onChange={({ target }) =>
            setCredentials({ ...credentials, password: target.value })
          }
        />
        <br/>
        <input
          required
          value={credentials.password_confirmation}
          type="password"
          placeholder="Confirm password"
          onChange={({ target }) =>
            setCredentials({
              ...credentials,
              password_confirmation: target.value,
            })
          }
        />
        {invalidCredentials && (
          <p style={{ color: "red" }}>Invalid credentials</p>
        )}
        <br/>
        <button>Register</button>
      </form>
    </div>
  );
}
