import React, { useState } from 'react';

const InvalidEmailError = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTryAgain = () => {
    // Reset the form or handle retry logic
    setEmail('');
    setPassword('');
    // You can also redirect to the login page or handle any other logic if needed
  };

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
        <button 
          className="btn btn-primary w-100 mb-3"
          onClick={handleTryAgain}
        >
          Try Again
        </button>
        
        {/* Removed links for Contact Support and Help Center */}
        {/*<p className="text-center text-muted mt-3">
          Error Code: AUTH_001
        </p>*/}
      </div>
    </div>
  );
};

export default InvalidEmailError;
