import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InvalidEmailError = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTryAgain = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 w-50">
        <h2 className="text-center mb-4">Oops! Something went wrong</h2>
        
        <div className="text-center">
          <p className="text-danger">Invalid email or password</p>
          <p>Please double-check your credentials and try again. Make sure you've entered the correct email address and password.</p>
        </div>
        
        <button className="btn btn-primary w-100 mb-3" onClick={handleTryAgain}>Try Again</button>
        
        <p className="text-center">
          <Link to="/contact-support" className="text-muted">Contact support if the issue persists</Link>
        </p>
        
        <div className="text-center mt-3">
          <p className="text-muted">
            Still having trouble? Visit our <Link to="/help-center">Help Center</Link>
          </p>
        </div>
        
        <p className="text-center text-muted">Error Code: AUTH_001</p>
      </div>
    </div>
  );
};

export default InvalidEmailError;
