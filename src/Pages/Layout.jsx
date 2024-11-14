import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import LoginPop from "./LoginPop";
import RegisterPop from "./RegisterPop";

function Layout() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary my-3">
        <div className="container-fluid">
          <NavLink className="navbar-brand my-0" to="#">
            <h5 className="my-3">Fruits and Vegetables</h5>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="Product"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="fruits">
                      Fruits
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="vegetables">
                      Vegitables
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
              <input
                type="text"
                className="form-control w-100 mx-auto my-3"
                placeholder="Search vegetables..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Handle input change
              />
            </form> */}

            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-5">
                <NavLink
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  to="/login"
                >
                  <strong>Login</strong>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <LoginPop />
      <RegisterPop />
      <Outlet />
    </>
  );
}

export default Layout;
