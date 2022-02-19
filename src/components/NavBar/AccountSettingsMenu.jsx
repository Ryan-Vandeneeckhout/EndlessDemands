import { Link } from "react-router-dom";
import { useAuthContext } from '../../firebase/firebaseHooks/useAuthContext.js'

const AccountSettingsMenu = (props) => {

    const { user, authIsReady } = useAuthContext();

    return (
        <section className="themeChanger">
            {authIsReady && (
                <div className={`MusicMenuToggle${props.accountSettings ? " open" : " closed"}`}>
                    {user && <Link to="/logout"><button className="MusicMenuButton accountSettings">Logout</button></Link>}
                    <Link to="/login"><button className="MusicMenuButton accountSettings">Login <span>Page</span></button></Link>
                    {!user && <Link to="/signup"><button className="MusicMenuButton accountSettings">Signup <span>Page</span></button></Link> }
                    <button className="MusicMenuButton accountSettings" onClick={props.AccountSettings}>Close Account Settings Menu</button>
                </div>
            )}
        </section>
    )
}
export default AccountSettingsMenu; 
