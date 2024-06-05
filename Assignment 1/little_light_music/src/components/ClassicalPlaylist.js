// ClassicalPage.js
import React from 'react';
import './PlaylistPage.css';
import MusicImage from '../assets/album10.jpg';

const ClassicalPage = () => {
  const playlist = { name: 'Classical' };

  const songs = [
    {
      title: 'Classical Song 1',
      album: 'Album 1',
      artist: 'Artist 1',
      duration: '3:30',
      albumImage: MusicImage
    },
    {
      title: 'Classical Song 2',
      album: 'Album 2',
      artist: 'Artist 2',
      duration: '4:15',
      albumImage: MusicImage
    },
    {
      title: 'Classical Song 3',
      album: 'Album 3',
      artist: 'Artist 3',
      duration: '5:00',
      albumImage: MusicImage
    },
  ];

  return (
    <div className="playlist-page">
      <h2 className='heading'>{playlist.name}</h2>
      <div className="song-list">
        {songs.map((song, index) => (
          <div key={index} className="song">
            <div className="song-details-music">
              <p className="song-title">{song.title}</p>
              <p className="song-album">{`${song.album} - ${song.artist}`}</p>
              <p className="song-time">{song.duration}</p>
            </div>
            <img src={song.albumImage} alt="Album Art" className="album-image" />
            <button className="like-button-music  ">&#10084;</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassicalPage;
