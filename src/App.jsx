// src/App.js
import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import ImageGallery from './components/ImageGallery';
import DetailPage from './components/DetailPage';

const accessKey = 'nk1WiOoOo1e6SjvkV8PWe7KNQhEAddOM66M62GHyGrw';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  async function fetchImages(query, page = 1) {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    setImages((prevImages) => (page === 1 ? data.results : [...prevImages, ...data.results]));
  }

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
    fetchImages(query, 1);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(searchQuery, nextPage);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Image Search Engine</h1>
              <SearchForm onSearch={handleSearch} />
              <ImageGallery images={images} onLoadMore={handleLoadMore} />
            </>
          }
        />
        <Route path="/details/:id" element={<DetailPage images={images} />} />
      </Routes>
    </Router>
  );
}

export default App;