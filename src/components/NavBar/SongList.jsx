import { SongListMap } from "../inputmaps/navBarInputMaps/SongListMap";
import AudioSource from "./AudioSource";

const SongList = () => {
  //SongList Map Component
  return (
    <>
      {SongListMap.map((item, index) => {
        return (
          <>
            {/*Return Audio Item JSX*/}
            <AudioSource
              key={index}
              classesNames={item.MusicMenuButton}
              song={item.songName}
              color={item.hex_value}
              src={item.SongListLocation}
            ></AudioSource>
          </>
        );
      })}
    </>
  );
};

export default SongList;