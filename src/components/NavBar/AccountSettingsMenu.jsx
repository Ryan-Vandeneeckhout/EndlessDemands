import { Link } from "react-router-dom";
import { useAuthContext } from '../../firebase/firebaseHooks/useAuthContext.js'

const AccountSettingsMenu = (props) => {
//Account Settings Menu Component// 
    const { user, authIsReady } = useAuthContext();

    return (
        <section className="themeChanger">
            {/*Firebase Auth Check if User Sign in or Not*/}
            {authIsReady && (
                <div className={`MusicMenuToggle${props.accountSettings ? " open" : " closed"}`}
                >
                    {/*User Signed in Show Logout Button*/}
                    {user && <Link to="/logout"><button className="MusicMenuButton accountSettings">Logout</button></Link>}
                    <Link to="/login"><button className="MusicMenuButton accountSettings">Login <span>Page</span></button></Link>
                    {/*User Noit Logged in Show Sign Up Button*/}
                    {!user && <Link to="/signup"><button className="MusicMenuButton accountSettings">Signup <span>Page</span></button></Link> }
                    <button className="MusicMenuButton accountSettings" onClick={props.AccountSettings}>Close Account Settings Menu</button>
                </div>
            )}
        </section>
    )
}
export default AccountSettingsMenu; 
