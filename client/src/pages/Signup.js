import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup() {
  const [formState, setFormState] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <h2 className="mt-4 mb-4 text-center">Signup</h2>
      <form onSubmit={handleFormSubmit}>
        {/* First Name: */}
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Last Name */}
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Email: */}
        <div className="flex-row space-between my-2">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Password */}
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd" className="form label">
            Password:
          </label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Buttons */}
        <div className="flex-row flex-end mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/login" className="btn btn-success ms-4">
            ← Go to Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
