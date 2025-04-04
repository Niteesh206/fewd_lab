import React from 'react';

const Products = () => {
  const categories = [
    {
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=1000",
      title: "Electronics",
      description: "Latest gadgets and devices"
    },
    {
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1000",
      title: "Fashion",
      description: "Trendy clothing and accessories"
    },
    {
      image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=1000",
      title: "Home & Living",
      description: "Furniture and home decor"
    },
    {
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=1000",
      title: "Books",
      description: "Books for all ages"
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Product Categories</h2>
      <div className="row g-4">
        {categories.map((category, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="card h-100 category-card">
              <img 
                src={category.image} 
                className="card-img-top" 
                alt={category.title} 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{category.title}</h5>
                <p className="card-text">{category.description}</p>
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;