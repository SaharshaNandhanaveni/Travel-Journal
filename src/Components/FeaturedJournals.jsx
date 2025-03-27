import React from 'react';

const FeaturedJournals = () => {
  return (
    <section className="my-5">
      <div className="container text-center">
        <h3 className="mb-4">Featured Travel Journals</h3>
        <div className="row">
          <div className="col-md-4">
            <img src="https://via.placeholder.com/300" alt="Greek Island" className="img-fluid" />
            <h5>Greek Island Hopping</h5>
          </div>
          <div className="col-md-4">
            <img src="https://via.placeholder.com/300" alt="Japan in Spring" className="img-fluid" />
            <h5>Japan in Spring</h5>
          </div>
          <div className="col-md-4">
            <img src="https://via.placeholder.com/300" alt="Peru Adventure" className="img-fluid" />
            <h5>Peru Adventure</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJournals;
