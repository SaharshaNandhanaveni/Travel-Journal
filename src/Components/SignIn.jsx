import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 w-50">
        <h2 className="text-center mb-4">Welcome Back</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign In</button>
        </form>
        <p className="text-center mt-3">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
