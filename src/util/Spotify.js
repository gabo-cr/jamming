const client_id = '95c7ac071ac4423ea971db6f68b9d0c6';
const redirect_uri = 'http://localhost:3000/';
//let accessToken = '';

const Spotify = {
  accessToken: '',
  getAccessToken() {
    if (this.accessToken) {
      console.log('accessToken 111111');
      return this.accessToken;
    } else {
      console.log('accessToken 222222');
      const url = window.location.href;
      console.log('url');
      console.log(url);
      const expiresIn = url.match('/expires_in=([^&]*)/');
      this.accessToken = url.match('/access_token=([^&]*)/');
      console.log('accessToken url');
      console.log(this.accessToken);
      if (this.accessToken) {
        console.log('accessToken 333333');
        window.setTimeout(() => this.accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
      } else {
        console.log('accessToken 4444444');
        window.location.replace('https://accounts.spotify.com/authorize?client_id=' + client_id + '&response_type=token&scope=playlist-modify-public&redirect_uri=' + redirect_uri);
      }
    }
    console.log('accessToken');
    console.log(this.accessToken);
  },
  search(term) {
    const promise = new Promise((resolve, reject) => {
      let trackList = [];
      this.getAccessToken();
      fetch('https://api.spotify.com/v1/search?type=track&q=' + term, 
        {
          headers: {'Authorization': 'Bearer ' + this.accessToken}
        })
        .then((response) => {
          console.log('response');
          console.log(response);
          const json = response.json();
          console.log('json');
          console.log(json);
          if (json) {
            
          }
        })
        .then(data => console.log(data));
      resolve(trackList);
    });
    return promise;
  },
  savePlaylist(playlistName, trackURIs) {
    if (!playlistName || !trackURIs) {
      return;
    }
    let accessToken = this.getAccessToken();
    let header = {'Authorization': 'Bearer ' + accessToken};
    let userId;
  }
};

export { Spotify };



/*
var state = generateRandomString(16);

localStorage.setItem(stateKey, state);
var scope = 'user-read-private user-read-email';

var url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
url += '&state=' + encodeURIComponent(state);*/