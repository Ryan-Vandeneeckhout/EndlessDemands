import { PlayPauseMusic } from "./PlayPauseMusicFunction";
const  PlayPauseMusicButton = () => {
  //Music Global Button Component
    const { Play } = PlayPauseMusic(); 

   return (
    <div className="pausePlayButton" onClick={Play}>
      <i
        className="fas fa-volume-up"></i>
    </div>
  );
};
export default PlayPauseMusicButton;