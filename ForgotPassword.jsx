import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 w-50">
        <h2 className="text-center mb-4">Forgot Password?</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Reset Link</button>
        </form>
        <p className="text-center mt-3">
          <a href="/signin">Back to Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
