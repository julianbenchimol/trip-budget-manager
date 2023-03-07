import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
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
    <div
      className="container my-1 bg-success p-2 text-dark bg-opacity-50 mt-5"
      id="userCard"
    >
      <h2 className="mt-4 mb-4 text-center fw-bold fst-italic">
        Sign Up here!
      </h2>
      <form onSubmit={handleFormSubmit}>
        {/* First Name: */}
        <div className="row g-3 text-center">
          <div className="flex-row space-between my-2 col-sm">
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input
              placeholder="ex: John"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {/* Last Name */}
          <div className="flex-row space-between my-2 col-sm">
            <label htmlFor="lastName" className="form-label">
              Last Name:
            </label>
            <input
              placeholder="ex: Wayne"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        {/* Email: */}
        <div className="flex-row space-between my-2 text-center">
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
        <div className="flex-row space-between my-2 text-center">
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
          <Link to="/login" className="btn btn-dark ms-4">
            ← Go to Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;