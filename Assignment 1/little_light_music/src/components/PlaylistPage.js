// PlaylistPage.js
import React from 'react';
import './PlaylistPage.css';
import MusicImage from '../assets/album10.jpg';

const PlaylistPage = ({ playlist }) => {
  
  const songs = [
    {
      title: 'Song 1',
      album: 'Album 1',
      artist: 'Artist 1',
      duration: '3:30',
      albumImage: MusicImage
    },
    {
      title: 'Song 2',
      album: 'Album 2',
      artist: 'Artist 2',
      duration: '4:15',
      albumImage: MusicImage
    },
    {
      title: 'Song 3',
      album: 'Album 3',
      artist: 'Artist 3',
      duration: '5:00',
      albumImage: MusicImage
    },
  ];

  if (!playlist) {
    return <div className="playlist-page">No Playlist Selected</div>;
  }

  return (
    <div className="playlist-page">
      <h2 className="playlist-heading">{playlist.name}</h2>
      <div className="song-list">
        {songs.map((song, index) => (
          <div key={index} className="song">
            <img src={song.albumImage} alt="Album Art" className="album-image" />
            <div className="song-details-music">
              <p className="song-title">{song.title}</p>
              <p className="song-album">{song.album}</p>
              <p className="song-artist">{song.artist}</p>
              <p className="song-time">{song.duration}</p>
            </div>
            <button className="like-button-music">&#10084;</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistPage;
