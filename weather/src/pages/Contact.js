import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add contact form submission logic here
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title mb-4">Get in Touch</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title mb-4">Contact Information</h3>
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-geo-alt text-primary me-2 fs-4"></i>
                <p className="mb-0">123 E-Shop Street, Digital City, 12345</p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-telephone text-primary me-2 fs-4"></i>
                <p className="mb-0">+1 (555) 123-4567</p>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-envelope text-primary me-2 fs-4"></i>
                <p className="mb-0">contact@eshop.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;