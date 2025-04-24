import React, { useState } from "react";
import { RegisterWrapper } from "./register.style";
import { useLocation, useNavigate } from "react-router-dom";
import { usersUrl } from "../../../config";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchUsers = async () => {
    const res = await fetch(usersUrl);
    const data = await res.json();
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!username.trim() || !email.trim() || !password.trim()) {
        alert("Fill all fields");
        return;
      }
      const users = await fetchUsers();

      const filterUsername = users.some((user) => user.username === username);

      const filterEmail = users.some((user) => user.email === email);

      if (filterEmail) {
        alert("Email is taken");
        return;
      }

      if (filterUsername) {
        alert("Username is taken");
        return;
      }

      await fetch(usersUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      navigate("/");
    } catch (error) {
      console.warn("error");
      alert("An error occured");
    }
  };

  return (
    <RegisterWrapper>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="username">Username</label>
          <input
            required
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="username">Email</label>
          <input
            required
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button>Sign Up</button>
      </form>
    </RegisterWrapper>
  );
};

export default Register;
