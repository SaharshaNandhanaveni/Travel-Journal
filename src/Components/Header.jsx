import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate between pages

const Header = () => {
  return (
    <header className="bg-dark text-white p-4">
      <div className="container d-flex justify-content-between">
        <h1>Travel Journal</h1>
        <div>
          <Link to="/signin" className="btn btn-light mr-2">Login</Link> {/* Link to Sign In */}
          <Link to="/signup" className="btn btn-outline-light">Sign Up</Link> {/* Link to Sign Up */}
        </div>
      </div>
    </header>
  );
};

export default Header;
