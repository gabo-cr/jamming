import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const { onSearch } = props;
  const [ term, setTerm ] = useState('');

  const search = () => {
    onSearch(term);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" value={term} onChange={handleTermChange} />
      <button className="SearchButton" onClick={search}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
