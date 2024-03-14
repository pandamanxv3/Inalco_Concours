import React, { createContext, useContext, useState, useMemo } from 'react';
import { Howl } from 'howler';

// Type pour le contexte
type MusicPlayerContextType = {
  songs: Howl[];
  play: (currentIndex: number) => void;
  swap: (nextSongIndex: number, previousSongIndex: number) => void;
  pause: () => void;
  reset: () => void;
};

// Création du contexte avec une valeur par défaut vide
export const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

type MusicPlayerProviderProps = {
  children: React.ReactNode;
};

export const MusicPlayerProvider: React.FC<MusicPlayerProviderProps> = ({ children }) => {
  const songs = useMemo(() => [
    new Howl({ src: ['/music/kr.mp3'], volume: 0 }),
    new Howl({ src: ['/music/ilo.mp3'], volume: 0 }),
    new Howl({ src: ['/music/kr.mp3'], volume: 0 }), // Note: même chemin, intentionnel?
  ], []);

  const play = (currentIndex: number) => {
    console.log('play');
    songs.forEach((song, index) => {
        song.play();
      if (index === currentIndex) {
        song.fade(0, 1, 3000);
      }
    });
  };

  const swap = (nextSongIndex: number, previousSongIndex: number) => {
    console.log('swap', nextSongIndex, previousSongIndex);
    songs[previousSongIndex].fade(1, 0, 4000);
    songs[nextSongIndex].fade(0, 1, 4000);
  };

  const pause = () => {
    songs.forEach(song => song.pause());
  };

  const reset = () => {
    songs.forEach(song => {
      song.stop();
      song.volume(0);
    });
  };

  return (
    <MusicPlayerContext.Provider value={{ songs, play, swap, pause, reset }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

// Hook pour utiliser le contexte
export function useMusicPlayerz() {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
  }
  return context;
}
