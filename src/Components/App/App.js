import React, { useState } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';
import { Spotify } from '../../util/Spotify';

function App(props) {
  const [ searchResults, setSearchResults ] = useState([]);
  const [ playlistName, setPlaylistName ] = useState('My new playlist');
  const [ playlistTracks, setPlaylistTracks ] = 
    useState([
      {id: '1', name: 'Reflexiones', artist: 'Esto es eso', album: 'Esto es eso', uri: ''},
      {id: '2', name: 'Cosas del corazón', artist: 'Esto es eso', album: 'Esto es eso', uri: ''},
      {id: '3', name: 'Laididap', artist: 'Esto es eso', album: 'Esto es eso', uri: ''}
    ]);

  const addTrack = (track) => {
    if (playlistTracks.find(element => element.id === track.id)) {
      setPlaylistTracks(...playlistTracks, track);
    }
  };

  const removeTrack = (track) => {
    const newPlaylist = playlistTracks.filter(element => element.id !== track.id);
    setPlaylistTracks(newPlaylist);
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(element => element.uri);
  };

  const search = (term) => {
    Spotify.search(term);
    console.log(term);
  };

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults 
            searchResults={searchResults}
            onAdd={addTrack}
            />
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
