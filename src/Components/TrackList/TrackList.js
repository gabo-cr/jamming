import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

function TrackList(props) {
  const { searchResults, playlistTracks, onAdd, onRemove, isRemoval } = props;

  return (
    <div className="TrackList">
      {
        searchResults
        &&
        searchResults.map((track) => {
          return <Track 
                    key={track.id} 
                    track={track} 
                    onAdd={onAdd}
                    onRemove={onRemove}
                    isRemoval={isRemoval}
                  />;
        })
      }
    </div>
  );
}

export default TrackList;
