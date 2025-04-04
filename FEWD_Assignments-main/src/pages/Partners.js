import React from 'react';

const Partners = () => {
  const partners = [
    {
      icon: "bi-truck",
      title: "Global Logistics Co.",
      role: "Shipping Partner",
      description: "Ensuring fast and reliable delivery worldwide"
    },
    {
      icon: "bi-shield-check",
      title: "SecurePay Solutions",
      role: "Payment Partner",
      description: "Providing secure payment processing"
    },
    {
      icon: "bi-building",
      title: "Warehouse Plus",
      role: "Storage Partner",
      description: "State-of-the-art storage facilities"
    },
    {
      icon: "bi-box-seam",
      title: "PackMaster",
      role: "Packaging Partner",
      description: "Eco-friendly packaging solutions"
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Partners</h2>
      <div className="row g-4">
        {partners.map((partner, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="card h-100 text-center p-3">
              <div className="text-primary mb-3">
                <i className={`bi ${partner.icon} fs-1`}></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">{partner.title}</h5>
                <p className="text-muted">{partner.role}</p>
                <p className="card-text">{partner.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;