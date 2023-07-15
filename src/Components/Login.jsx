// import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function Login() {
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);

  // const handleInputChange = (e) => {
  //   const { id, value } = e.target;
  //   if (id === "email") {
  //     setEmail(value);
  //   }
  //   if (id === "password") {
  //     setPassword(value);
  //   }
  // };

  // const handleSubmit = () => {
  //   console.log(email, password);
  // };

  return (
    <>
      <Container style={{ background: "rgb(0, 0, 0, 0.6)" }}>
        <div className="pt-5 pb-5">
          <div className="form mt-5 mb-5">
            <div className="form-body">
              <h1>Please Login</h1>
              <div className="email">
                <label className="form__label" for="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form__input"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="password">
                <label className="form__label" for="password">
                  Password
                </label>
                <input
                  className="form__input"
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <Nav class="footer">
              <Nav.Link>
                <Link
                  type="submit"
                  className="btn btn-primary mb-4"
                  to="/admindashboard"
                >
                  Login
                </Link>
              </Nav.Link>
              <br />
              <Nav.Link>
                <Link to="#" className="forgot">
                  Forgot Password?
                </Link>
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </Container>
    </>
  );
}
export default Login;
