import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 w-50">
        <h2 className="text-center mb-4">Create Your Travel Journal</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
        <p className="text-center mt-3">
          <Link to="/signin">Already have an account? Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
