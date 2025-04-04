import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
      title: "Store Interior"
    },
    {
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1000",
      title: "Product Display"
    },
    {
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1000",
      title: "Customer Service"
    },
    {
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000",
      title: "Shopping Experience"
    },
    {
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
      title: "Team Meeting"
    },
    {
      image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=1000",
      title: "Technology"
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Gallery</h2>
      <div className="row g-4">
        {galleryItems.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100">
              <img 
                src={item.image} 
                alt={item.title} 
                className="card-img-top img-fluid gallery-img"
              />
              <div className="card-body">
                <h5 className="card-title text-center">{item.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;