import { SongListMap } from "../inputmaps/navBarInputMaps/SongListMap.js";
import AudioSource from "./AudioSource";
import { PlayPauseMusic } from "../globalButtons/PlayPauseMusicFunction.js";

const SongList = (props) => {
  const { Play } = PlayPauseMusic();
  //SongList Map Component
  return (
    <>
      {SongListMap.map((item) => {
        return (
          <>
            {/*Return Audio Item JSX*/}
            <AudioSource
              key={item.hex_value}
              classesNames={item.MusicMenuButton}
              song={item.songName}
              color={item.hex_value}
              src={item.SongListLocation}
            ></AudioSource>
          </>
        );
      })}
      <button onClick={Play} className="MusicMenuButton">
        Pause/Play Music
          </button>
          <button style={{ backgroundColor: "black", color: "white" }} onClick={props.ChangeStateFunction} className="MusicMenuButton">
        Close Menu
    </button>
    </>
  );
};

export default SongList;
