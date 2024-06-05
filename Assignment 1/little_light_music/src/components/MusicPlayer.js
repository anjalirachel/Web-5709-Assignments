import React, { useState } from 'react';
import './MusicPlayer.css';
import MusicImage from '../assets/album10.jpg';
import play from '../assets/play-button.png';
import pause from '../assets/pause.png';
import backward from '../assets/backward.png';
import forward from '../assets/forward.png';
import shuffle from '../assets/shuffle.png';
import repeat from '../assets/repeat.png';

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
        <img src={backward} alt="Backward" className="control-button" />
        <button className="control-button" onClick={handlePlayPause}>
          <img className="control-button" src={isPlaying ? pause : play} alt="Play/Pause" />
        </button>
        <img src={forward} alt="Forward" className="control-button" />
      </div>
      <div className="additional-controls">
        <img src={shuffle} alt="Shuffle" className="control-button" />
        <img src={repeat} alt="Repeat" className="control-button" />
      </div>
    </div>
  );
};

export default MusicPlayer;
