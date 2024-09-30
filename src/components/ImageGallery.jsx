// src/components/ImageGallery.js
import React from 'react';
import { Link } from 'react-router-dom';

function ImageGallery({ images, onLoadMore }) {
  return (
    <div>
      <div className="gallery">
        {images.map((image) => (
          <Link key={image.id} to={`/details/${image.id}`}>
            <img src={image.urls.small} className='images' alt={image.alt_description} />
          </Link>
        ))}
      </div>
      <button onClick={onLoadMore} className='show-more-button'>Show more</button>
    </div>
  );
}

export default ImageGallery;