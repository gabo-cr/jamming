import React from 'react';
import './Track.css';

function Track(props) {
  const { track, onAdd, onRemove, isRemoval } = props;

  const renderAction = () => {
    return isRemoval 
      ? <button className="Track-action" onClick={removeTrack}>-</button> 
      : <button className="Track-action" onClick={addTrack}>+</button>;
  };

  const addTrack = () => {
    onAdd(track);
  };

  const removeTrack = () => {
    onRemove(track)
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      <button className="Track-action">{renderAction()}</button>
    </div>
  );
}

export default Track;
