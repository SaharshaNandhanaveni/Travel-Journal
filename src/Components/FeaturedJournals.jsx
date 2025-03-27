import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to handle navigation

const FeaturedJournals = () => {
  return (
    <section className="my-5">
      <div className="container text-center">
        <h3 className="mb-4">Featured Travel Journals</h3>
        <div className="row">
          {/* Greek Island Hopping Link */}
          <div className="col-md-4">
            <Link to="/journal/greek-island-hopping">
              <img src="https://via.placeholder.com/300" alt="Greek Island" className="img-fluid" />
              <h5>Greek Island Hopping</h5>
            </Link>
          </div>

          {/* Japan in Spring Link */}
          <div className="col-md-4">
            <Link to="/journal/japan-in-spring">
              <img src="https://via.placeholder.com/300" alt="Japan in Spring" className="img-fluid" />
              <h5>Japan in Spring</h5>
            </Link>
          </div>

          {/* Peru Adventure Link */}
          <div className="col-md-4">
            <Link to="/journal/peru-adventure">
              <img src="https://via.placeholder.com/300" alt="Peru Adventure" className="img-fluid" />
              <h5>Peru Adventure</h5>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJournals;
