import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarStyles>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          My Blog
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <p tabIndex={"1"}>lorem 20</p>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/settings">
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/createblog">
                Create Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </NavbarStyles>
  );
};

export default Navbar;

const NavbarStyles = styled.div`
    .navbar {
        background-color: #343a40;
        padding: 1rem;
    }

    .navbar-brand {
        font-size: 1.8rem;
        font-weight: bold;
        color: #ffffff;
        text-transform: uppercase;
    }

    .navbar-toggler {
        border-color: #ffffff;
    }

    .navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }

    .nav-link {
        color: #ffffff;
        font-size: 1.2rem;
        margin-right: 1rem;
        transition: color 0.3s ease;

        &:hover {
            color: #007bff;
        }
    }

    .nav-item.active .nav-link {
        color: #007bff;
        font-weight: bold;
    }

    .collapse {
        justify-content: flex-end;
    }
`;
