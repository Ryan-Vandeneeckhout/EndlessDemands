import { useRef } from "react";

const AudioSource = (props) => {

    const audioRef = useRef();

    const songPlaying = () => {
        let sounds = document.getElementsByTagName('audio');
        for (let i = 0; i < sounds.length; i++) sounds[i].pause();
        audioRef.current.play(); 
    
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