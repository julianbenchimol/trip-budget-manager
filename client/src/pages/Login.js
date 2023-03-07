import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1 bg-success p-2 text-dark bg-opacity-50 mt-5" id='userCard'>
      <h2 className="mb-4 mt-4 text-center fst-italic fw-bold">Login Here!</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Email Section: */}
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

        {/* Password Section: */}
        <div className="flex-row space-between my-2 mb-4 ">
          <label htmlFor="pwd" className="form-label">
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
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}

        {/* Button Div */}
        <div className="flex-row flex-end">
          <button type="submit" className="btn btn-primary mb-3 me-3 ms-2">
            Submit
          </button>
          <Link to="/signup" className="btn btn-dark mb-3">← Go to Signup</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;