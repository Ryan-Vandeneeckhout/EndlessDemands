import "./ThemeChanger.css";
import SongList from "./SongList.jsx";

const ThemeChanger = (props) => {
  //Theme Changer/Music Menu Component

  return (
    <section className="themeChanger">
      <div className={`MusicMenuToggle${props.showbox ? " open" : " closed"}`}>
        <SongList />
      </div>
    </section>
  );
};
export default ThemeChanger;