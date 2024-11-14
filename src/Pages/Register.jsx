import React from "react";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="container my-1">
        <div className="d-flex align-item-center justify-content-center w-100 vh-40 bg-silver">
          <div className="form_container p-5 rounded bg-dark text-white w-40 my-1">
            <form>
              <div class="mb-3">
                <label htmlFor="exampleInputName" class="form-label">
                  Customer Name
                </label>
                <input type="text" class="form-control" id="exampleInputName" />
              </div>

              <div class="mb-3">
                <label htmlFor="exampleInputEmail1" class="form-label">
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
                <label htmlFor="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label htmlFor="exampleInputMobile" class="form-label">
                  Mobile
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputMobile"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <div className="text-center">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
                <div>
                  <NavLink to="#">Sign In</NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
