import { useState } from "react";

export const PlayPauseMusic = () => {
  let [playMusicPause, setPlayMusicPause] = useState(true);
  const Play = () => {
    //If Music is Playing click to Pause Function
    if (playMusicPause === true) {
      let sounds = document.getElementsByTagName("audio");
      for (let i = 0; i < sounds.length; i++) sounds[i].pause();
      setPlayMusicPause((playMusicPause = false));
    }
    //Music is Paused Click to Play
    else if (playMusicPause === false) {
      let audio = document.getElementsByClassName("currentSong");
      for (let i = 0; i < audio.length; i++) audio[i].play();
      setPlayMusicPause((playMusicPause = true));
      audio.volume = 0.2;
    }
  };
  return { Play };
};
