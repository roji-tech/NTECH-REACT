import React from "react";
import { LoginWrapper } from "./login.style";
import { useLocation, useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);

    navigate("/counter");

    sessionStorage.setItem("isLoggedIn", true);
  };

  return (
    <LoginWrapper>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="username">Username</label>
          <input required type="text" id="username" />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input required type="text" id="password" />
        </div>

        <button>Login</button>
      </form>
    </LoginWrapper>
  );
};

export default Login;
