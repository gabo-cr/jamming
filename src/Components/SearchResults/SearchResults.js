import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

function SearchResults(props) {
  const { searchResults, onAdd } = props;

  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList 
        searchResults={searchResults}
        onAdd={onAdd}
        isRemoval={false}
        />
    </div>
  );
}

export default SearchResults;
