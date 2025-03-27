import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Features = () => {
  return (
    <section className="bg-light py-5">
      <div className="container text-center">
        <h3 className="mb-4">Everything You Need to Document Your Adventures</h3>
        <div className="row">
          {/* Location Tagging Feature with Link */}
          <div className="col-md-4">
            <Link to="/location-tagging" className="text-decoration-none">
              <h4>Location Tagging</h4>
            </Link>
            <p>Tag your exact location and create interactive maps of your journey.</p>
          </div>

          {/* Photo Galleries Feature with Link */}
          <div className="col-md-4">
            <Link to="/photo-galleries" className="text-decoration-none">
              <h4>Photo Galleries</h4>
            </Link>
            <p>Upload and organize your travel photos in beautiful galleries.</p>
          </div>

          {/* Easy Sharing Feature with Link */}
          <div className="col-md-4">
            <Link to="/easy-sharing" className="text-decoration-none">
              <h4>Easy Sharing</h4>
            </Link>
            <p>Share your adventures with friends and family or keep them private.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
