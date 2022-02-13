import { useState } from "react";

const PlayPauseMusicButton = () => {

    let [playMusicPause, setPlayMusicPause] = useState(true);

    const PlayPauseMusic = () => {
        
        if (playMusicPause === true) {
            let sounds = document.getElementsByTagName('audio');
            for (let i = 0; i < sounds.length; i++) sounds[i].pause(); 
            setPlayMusicPause(playMusicPause = false);
            

        }

        else if (playMusicPause === false) {

            let audio = document.getElementsByClassName('currentSong');
            for (let i = 0; i < audio.length; i++) audio[i].play();
            setPlayMusicPause(playMusicPause = true);
            audio.volume = 0.2; 

        }
    }
   
    return <div className='pausePlayButton' onClick={PlayPauseMusic}>
           <i className={`${playMusicPause ? "fas fa-volume-up" : "fas fa-times"}`}></i>
            </div>

}
export default PlayPauseMusicButton; 