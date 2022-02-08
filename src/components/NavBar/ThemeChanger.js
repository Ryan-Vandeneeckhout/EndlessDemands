import "./ThemeChanger.css";
import SongList from "./SongList.js";

const ThemeChanger = (props) => {

    return (
        <section className="themeChanger">
            <div className={`MusicMenuToggle${props.showbox ? " open" : " closed"}`}>  
                <SongList /> 
            </div> 
        </section>
    )
}
export default ThemeChanger; 
