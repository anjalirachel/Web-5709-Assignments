import React from 'react';
import './Playlist.css';
import '../assets/album3.jpg';

const Playlist = ({ image, name }) => {
  return (
    <div className="playlist">
      <img src={image} alt={name} className="playlist-image" />
      <p className="playlist-name">{name}</p>
    </div>
  );
};

export default Playlist;
