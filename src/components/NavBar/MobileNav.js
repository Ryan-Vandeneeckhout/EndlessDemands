import { Link, useLocation } from "react-router-dom";
const MobileNav = (props) => {

    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;
  
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    //Brings up Mobile Nav // 
    return (
        <section className={`mobileNav${props.mobileNav ? " " : " closing"}`}>
            <nav className={`navMenuToggle${props.mobileNav ? " opened" : " close"}`} >
                <ul>
                <li onClick={props.MobileNavFunction} ><Link className={splitLocation[1] === "" ? "active" : "not"} aria-label="Go to home page" to="/">Home</Link></li>
                <li onClick={props.MobileNavFunction}><Link className={
                  splitLocation[1] === "storecatalogue" ? "active" : "not"
                } to="/storecatalogue">Store Catalogue</Link></li>
                <li onClick={props.MobileNavFunction}><Link className={splitLocation[1] === "aboutpage" ? "active" : "not"} to="/aboutpage">About Page</Link></li>
                </ul>
            </nav>
            
        </section>
    )
}

export default MobileNav; 