import "./ThemeChanger.scss";
import SongList from "./SongList.jsx";

const ThemeChanger = (props) => {
  //Theme Changer/Music Menu Component

  return (
    <section className="themeChanger">
      <div className={`MusicMenuToggle${props.showbox ? " open" : " closed"}`}>
        <SongList ChangeStateFunction={props.ChangeStateFunction} showbox={props.showbox} />
      </div>
    </section>
  );
};
export default ThemeChanger;