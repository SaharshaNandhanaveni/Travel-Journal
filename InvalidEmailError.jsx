import React from 'react';
import { Link } from 'react-router-dom';

const InvalidEmailError = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 w-50">
        <h2 className="text-center mb-4">Oops! Something went wrong</h2>
        
        <div className="text-center">
          {/* Error Message */}
          <p className="text-danger">Invalid email or password</p>
          <p>Please double-check your credentials and try again. Make sure you've entered the correct email address and password.</p>
        </div>
        
        {/* Try Again Button */}
        <button className="btn btn-primary w-100 mb-3">Try Again</button>
        
        {/* Contact Support Link */}
        <p className="text-center">
          <Link to="/contact-support" className="text-decoration-none">
            Contact Support
          </Link>
        </p>
        
        {/* Help Center Link */}
        <div className="text-center mt-3">
          <p className="text-muted">
            <Link to="/help-center" className="text-decoration-none">Still having trouble? Visit our Help Center</Link>
          </p>
        </div>
        
        {/* Error Code */}
        <p className="text-center text-muted">
          Error Code: AUTH_001
        </p>
      </div>
    </div>
  );
};

export default InvalidEmailError;
