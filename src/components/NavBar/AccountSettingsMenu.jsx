import { Link } from "react-router-dom";

const AccountSettingsMenu = (props) => {

    return (
        <section className="themeChanger">
            <div className={`MusicMenuToggle${props.accountSettings ? " open" : " closed"}`}>  
                <Link to="/logout"><button className="MusicMenuButton accountSettings">Logout</button></Link>
                <Link to="/login"><button className="MusicMenuButton accountSettings">Login <span>Page</span></button></Link>
                <Link to="/signup"><button className="MusicMenuButton accountSettings">Signup <span>Page</span></button></Link>
                <button className="MusicMenuButton accountSettings" onClick={props.AccountSettings}>Close Account Settings Menu</button>
            </div> 
        </section>
    )
}
export default AccountSettingsMenu; 
