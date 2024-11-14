import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container my-1">
        <div className="d-flex align-item-center justify-content-center w-100 vh-40 bg-silver">
          <div className="form_container p-5 rounded bg-dark text-white w-40 my-1">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <div className="text-center">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
                <div>
                  <NavLink to="#">Sign Up</NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
