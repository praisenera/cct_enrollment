import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Registration() {
  // const [firstName, setFirstName] = useState(null);
  // const [lastName, setLastName] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  // const [confirmPassword, setConfirmPassword] = useState(null);

  // const handleInputChange = (e) => {
  //   const { id, value } = e.target;
  //   if (id === "firstName") {
  //     setFirstName(value);
  //   }
  //   if (id === "lastName") {
  //     setLastName(value);
  //   }
  //   if (id === "email") {
  //     setEmail(value);
  //   }
  //   if (id === "password") {
  //     setPassword(value);
  //   }
  //   if (id === "confirmPassword") {
  //     setConfirmPassword(value);
  //   }
  // };

  // const handleSubmit = () => {
  //   console.log(firstName, lastName, email, password, confirmPassword);
  // };

  return (
    <Container style={{ background: "rgb(0, 0, 0, 0.6)" }}>
      <div className="pt-3 pb-3">
        <div className="form">
          <div className="form-body">
            <h1>Register</h1>
            <div className="username">
              <label className="form__label" for="firstName">
                First Name
              </label>
              <input
                className="form__input"
                type="text"
                id="firstName"
                placeholder="First Name"
                required
                // onChange={handleInputChange}
              />
            </div>
            <div className="lastname">
              <label className="form__label" for="lastName">
                Last Name
              </label>
              <input
                type="text"
                name=""
                id="lastName"
                className="form__input"
                placeholder="LastName"
                required
                // onChange={handleInputChange}
              />
            </div>
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
                // onChange={handleInputChange}
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
                // onChange={handleInputChange}
              />
            </div>
            <div className="confirm-password">
              <label className="form__label" for="confirmPassword">
                Confirm Password
              </label>
              <input
                className="form__input"
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                required
                // onChange={handleInputChange}
              />
            </div>
          </div>
          <div class="footer">
            <Link className="btn btn-primary" to="/login">
              Register
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Registration;
