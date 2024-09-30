// src/components/SearchForm.js
import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="div-header">
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search anything here..."
        className='input'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit" className='search-button'>Search</button>
    </form>
    </div>
    
  );
}

export default SearchForm;