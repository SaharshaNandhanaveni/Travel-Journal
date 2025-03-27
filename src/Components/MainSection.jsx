import React from 'react';
import { Link } from 'react-router-dom';

const MainSection = () => {
  return (
    <section className="text-center my-5">
      <div className="container">
        <h2>Capture Your Journey, Share Your Story</h2>
        <p className="lead">
          Create beautiful travel journals, share your adventures, and relive your favorite moments with our intuitive journaling platform.
        </p>
        <Link to="/create-journal" className="btn btn-primary">Create New Journal</Link>
      </div>
    </section>
  );
};

export default MainSection;
