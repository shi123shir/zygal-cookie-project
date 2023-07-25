import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email_id: email,
        password: password,
        
      });

      setError("");
      const { token } = response.data;
      
      if (token) {
        Cookies.set("token", token);
        navigate("/home");
      
      }
    } catch (err) {
      
      setError("Invalid credentials");
      setEmail("")
      setPassword("")
    }
  };

  return (
    
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "70vh",
         
        }}
      >
        <h2>Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          style={{ marginBottom: "5px", padding: "5px" }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          style={{ marginBottom: "5px", padding: "5px" }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} style={{ padding: "5px" }}>
          Login
        </button>
      </div>
  );
};



export default UserLogin;
