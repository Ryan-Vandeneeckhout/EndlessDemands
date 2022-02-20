import { Link } from "react-router-dom";
import "./NavBarUpperSite.css";
import { useAuthContext } from '../../firebase/firebaseHooks/useAuthContext.js';
import ShoppingCartCounter from "./ShoppingCartCounter.jsx";

const NavBarUpperSite = (props) => {
    
    const { user, authIsReady } = useAuthContext();
    
    return (
        <>
            {authIsReady && (
                
                <nav className="upperSite">
                    {/*Upper Site Button*/}
                    <button aria-label="Mobile Navigation" onClick={props.MobileNavFunction} className={`NavMobile${props.mobileNav ? " rotating" : " not"}`}><i className={`${props.mobileNav ? "fas fa-times" : "fas fa-bars"}`} /></button>
                    {/*Nav Ul Links Main*/}
                    <ul>
                        <li><Link aria-label="Go to home page" to="/">Home</Link></li>
                        <li><Link to="/storecatalogue">Store <span>Catalogue</span></Link></li>
                        <li><Link to="/aboutpage">About <span>Page</span></Link></li>
                        {user && <ShoppingCartCounter user={user}/>}
                        <li onClick={props.AccountSettings}>Account</li>
                     
                    </ul>
                    {/*Rainbow Button Music Menu*/}
                    <button aria-label="Theme and Song Changer" onClick={props.ChangeStateFunction} className={`themeClick${props.showbox ? " rotating" : " not"}`}>
                        <i className={`${props.showbox ? "fas fa-times" : "fas fa-bahai"}`}></i>
                    </button>            
                </nav>
            )}
        </>
    )
}

export default NavBarUpperSite; 