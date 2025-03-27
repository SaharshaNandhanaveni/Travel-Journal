import React from 'react';

const Features = () => {
  return (
    <section className="bg-light py-5">
      <div className="container text-center">
        <h3 className="mb-4">Everything You Need to Document Your Adventures</h3>
        <div className="row">
          <div className="col-md-4">
            <h4>Location Tagging</h4>
            <p>Tag your exact location and create interactive maps of your journey.</p>
          </div>
          <div className="col-md-4">
            <h4>Photo Galleries</h4>
            <p>Upload and organize your travel photos in beautiful galleries.</p>
          </div>
          <div className="col-md-4">
            <h4>Easy Sharing</h4>
            <p>Share your adventures with friends and family or keep them private.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
