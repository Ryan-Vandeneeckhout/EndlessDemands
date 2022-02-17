import { Link } from "react-router-dom";
import "./NavBarUpperSite.css";

const NavBarUpperSite = (props) => {
 
    return (
        
        <nav className="upperSite">
            <button aria-label="Mobile Navigation" onClick={props.MobileNavFunction} className={`NavMobile${props.mobileNav ? " rotating" : " not"}`}><i className={`${props.mobileNav ? "fas fa-times" : "fas fa-bars"}`}/></button>
            <ul>
                <li><Link aria-label="Go to home page" to="/">Home</Link></li>
                <li><Link to="/storecatalogue">Store <span>Catalogue</span></Link></li>
                <li><Link to="/aboutpage">About <span>Page</span></Link></li>
                <li onClick={props.AccountSettings}>Account</li>  
            </ul>
            <button aria-label="Theme and Song Changer" onClick={props.ChangeStateFunction}  className={`themeClick${props.showbox ? " rotating" : " not"}`}>
            <i className={`${props.showbox ? "fas fa-times" : "fas fa-bahai"}`}></i>
            </button>
            
        </nav> 
    )
}

export default NavBarUpperSite; 