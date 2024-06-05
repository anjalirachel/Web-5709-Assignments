import React, { useState } from 'react';
import './MusicPlayer.css';
import MusicImage from '../assets/album10.jpg';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      alert('Music is paused');
    } else {
      alert('Song started');
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <div className="music-info">
        <img src={MusicImage} alt="Album Art" className="album-art" />
        <div className="song-details">
          <p className="song-name">Song Name</p>
          <p className="artist-name">Artist Name</p>
        </div>
        <button className="like-button">&#10084;</button>
      </div>
      <div className="music-controls">
        <button className="control-button">⏮</button>
        <button className="control-button" onClick={handlePlayPause}>
          {isPlaying ? '⏸' : '⏯'}
        </button>
        <button className="control-button">⏭</button>
      </div>
      <div className="additional-controls">
        <button className="control-button">🔀</button>
        <button className="control-button">🔁</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
