import { useRef } from "react";

const AudioSource = (props) => {

    const audioRef = useRef();
    let count = 0; 

    const songPlaying = () => {

        let currentSongPlaying = audioRef.current; 

        if (audioRef.current === currentSongPlaying && count === 1) {
            audioRef.current.pause();
            audioRef.current.classList.remove("currentSong"); 
            count--; 
        }

        else {
            
            let sounds = document.getElementsByTagName('audio');
            count++;
            for (let i = 0; i < sounds.length; i++) sounds[i].pause();
            
            let audio = document.getElementsByClassName('currentSong');
            for (let i = 0; i < audio.length; i++) audio[i].classList.remove("currentSong");

            audioRef.current.play(); 
            audioRef.current.classList.add("currentSong"); 

        }
    
    }
       
    return (
     <>
        <button style={{ backgroundColor: `${props.color}` }}className={props.classesNames} onClick={songPlaying}>Song: {props.song}</button>
        <audio ref={audioRef}>
            <source src={props.src} />
        </audio>
     </>
    
    );
};
  
export default AudioSource; 