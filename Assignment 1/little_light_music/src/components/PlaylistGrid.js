// src/components/PlaylistGrid.js
import React from 'react';
import Playlist from './Playlist';
import './PlaylistGrid.css';
import image3 from '../assets/album3.jpg';
import image1 from '../assets/album1.webp';
import image4 from '../assets/album4.jpg';
import image2 from '../assets/album2.webp';
import image7 from '../assets/album7.webp';
import image6 from '../assets/album6.jpg';
import image8 from '../assets/album8.jpg';
import image9 from '../assets/album9.jpg';
import image10 from '../assets/album10.jpg';
import image11 from '../assets/album11.jpg';
import image12 from '../assets/album12.jpg';
import image13 from '../assets/album13.jpg';
import image14 from '../assets/album14.jpg';
import image15 from '../assets/album15.jpg';

const playlists = [
  { image: image3, name: 'Classical' },
  { image: image4, name: 'Nature Sounds' },
  { image: image6, name: 'Instrumental' },
  { image: image8, name: 'Classical' },
  { image: image9, name: 'Classical' },
  { image: image10, name: 'Classical' },
  { image: image11, name: 'Classical' },
  { image: image12, name: 'Classical' },
  { image: image13, name: 'Classical' },
  { image: image14, name: 'Classical' },
  { image: image15, name: 'Classical' },
  { image: image1, name: 'Classical' },
  { image: image2, name: 'Classical' },
  { image: image7, name: 'Classical' },

];

const PlaylistGrid = ({ onNavigate }) => {
  const navigateToPlaylist = (playlistName) => {
    switch (playlistName) {
      case 'Classical':
        onNavigate('classical');
        break;
      case 'Nature Sounds':
        onNavigate('natureSounds');
        break;
      case 'Instrumental':
        onNavigate('instrumental');
        break;
      // Add more cases for additional playlists
      default:
        onNavigate('home');
    }
  };

  return (
    <div className="playlist-grid">
      {playlists.map((playlist, index) => (
        <div key={index} onClick={() => navigateToPlaylist(playlist.name)}>
          <Playlist image={playlist.image} name={playlist.name} />
        </div>
      ))}
    </div>
  );
};

export default PlaylistGrid;
