import { useMemo } from 'react';
import { Howl } from 'howler';
// import { useNavigation } from './useNavigation';

const useMusicPlayer = () => {
	const songs = useMemo(() => [
        new Howl({ src: ['/music/kr.mp3'], volume: 0 }),
        new Howl({ src: ['/music/ilo.mp3'], volume: 0 }),
        new Howl({ src: ['/music/kr.mp3'], volume: 0 }), //dz
    ], []);

	// (void)
	// const {currentIndex} = useNavigation();
	const play = (currentIndex: number) => {
		console.log('play');
		songs[0].play();
		songs[1].play();
		songs[2].play();
		// songs[currentIndex].fade(0, 1, 3000);
		console.log(songs[0]);
		songs[0].fade(0, 1, 3000);
		songs[1].fade(0, 1, 3000);
		songs[2].fade(0, 1, 3000);
	}
	const swap = (nextSongIndex: number, previousSongIndex: number) => {
		console.log('swap', nextSongIndex, previousSongIndex);
		// songs[previousSongIndex].fade(1, 0, 3000);
		// songs[nextSongIndex].fade(0, 1,3000);
		console.log(songs[0]);

		songs[0].mute(true);
		songs[1].mute(true);
		songs[2].mute(true);
	};

	const pause = () => {
		songs.forEach(song => song.pause());
	};

	const reset = () => {
		// songs[currentIndex].fade(1, 0, 2000, ); mettre fade in a la musique actuelle
		songs.forEach(song => song.stop().volume(0));
	};

	return { songs, play, swap, pause, reset };
};

export default useMusicPlayer;
