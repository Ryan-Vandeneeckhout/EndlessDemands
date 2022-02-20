import { useRef } from "react";

const AudioSource = (props) => {
// Audio Item One Item Component// 
    const audioRef = useRef();
    let count = 0; 

    const songPlaying = () => {

        //Pause Current Song if Clicked On Itself Button Function// 

        let currentSongPlaying = audioRef.current; 

        if (audioRef.current === currentSongPlaying && count === 1) {
            audioRef.current.pause();
            audioRef.current.classList.remove("currentSong"); 
            count--; 
        }

        else {

            //Pause current song and Play Another Song if Menu is Clicked// 
            
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
        {/*One Button JSX*/}
        <button style={{ backgroundColor: `${props.color}` }}className={props.classesNames} onClick={songPlaying}>Song: {props.song}</button>
        <audio ref={audioRef}>
            <source src={props.src} />
        </audio>
     </>
    
    );
};
  
export default AudioSource; 