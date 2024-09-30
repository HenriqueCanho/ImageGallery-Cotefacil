// src/components/DetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

function DetailPage({ images }) {
  const { id } = useParams();
  const image = images.find((img) => img.id === id);

  if (!image) {
    return <p>Image not found</p>;
  }

  return (
    <div>
      <h1>{image.alt_description}</h1>
      <div className="div-image-detail">
        <img src={image.urls.full} className='image-detail' alt={image.alt_description} />
      </div>
      <p>{image.description || 'No description available'}</p>
      <a href={image.links.html} target="_blank" rel="noopener noreferrer">
        View on Unsplash
      </a>
    </div>
  );
}

export default DetailPage;