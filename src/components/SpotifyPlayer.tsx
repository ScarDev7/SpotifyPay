// components/SpotifyPlayer.tsx
import React from 'react';
import { Song } from '../data/songs';

const SpotifyPlayer: React.FC<{ song: Song }> = ({ song }) => {
  if (!song.spotifyIframe) return null;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: song.spotifyIframe }} />
    </div>
  );
};

export default SpotifyPlayer;