import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark text-white p-4">
      <div className="container d-flex justify-content-between">
        <h1>Travel Journal</h1>
        <div>
          <button className="btn btn-light mr-2">Login</button>
          <button className="btn btn-outline-light">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
