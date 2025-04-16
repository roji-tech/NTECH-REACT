import React, { useState } from "react";
import { LoginWrapper } from "./login.style";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { usersUrl } from "../../../config";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const fetchUsers = async () => {
    const res = await fetch(usersUrl);
    const data = await res.json();
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const users = await fetchUsers();

      const filter = users.filter(
        (user) => user.username === username && user.password === password
      );

      console.log(filter);

      if (filter.length > 0) {
        sessionStorage.setItem(
          "user",
          JSON.stringify({
            ...filter[0],
          })
        );

        sessionStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(true);
        navigate("/counter");
      } else {
        alert("Invalid Username or password");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <LoginWrapper>
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
          <label htmlFor="password">Password</label>
          <input
            required
            type="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button>Login</button>

        <p>Please Sign up if you have no Account</p>
        <Link to={"/register"}>Sign Up</Link>
      </form>
    </LoginWrapper>
  );
};

export default Login;
