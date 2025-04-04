import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">About Us</h2>
      <div className="row">
        <div className="col-md-6">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" 
            alt="Team working" 
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">We are a family-owned business</h3>
          <p className="lead">
            Founded in 2020, E-Shop has grown from a small local store to a trusted online retailer, 
            serving customers nationwide with the same dedication and personal touch that defined our beginnings.
          </p>
          <p>
            Our commitment to quality, customer service, and community values remains at the heart of everything we do. 
            We believe in building lasting relationships with our customers and providing them with the best shopping experience possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;