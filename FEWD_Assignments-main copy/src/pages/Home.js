import React from 'react';

const Home = () => {
  return (
    <>
      <div className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">Welcome to Moto-E-Shop!</h1>
          <p className="lead">Your one-stop destination for all your Moto needs</p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card h-100 text-center p-3">
              <div className="text-primary mb-3">
                <i className="bi bi-bag fs-1"></i>
              </div>
              <h5>Quality Products</h5>
              <p>Curated selection of premium items</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 text-center p-3">
              <div className="text-primary mb-3">
                <i className="bi bi-truck fs-1"></i>
              </div>
              <h5>Fast Delivery</h5>
              <p>Quick and reliable shipping</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 text-center p-3">
              <div className="text-primary mb-3">
                <i className="bi bi-credit-card fs-1"></i>
              </div>
              <h5>Secure Payment</h5>
              <p>Safe and protected transactions</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 text-center p-3">
              <div className="text-primary mb-3">
                <i className="bi bi-headset fs-1"></i>
              </div>
              <h5>24/7 Support</h5>
              <p>Always here to help you</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;