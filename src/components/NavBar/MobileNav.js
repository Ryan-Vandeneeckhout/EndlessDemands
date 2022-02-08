import { Link } from "react-router-dom";

const MobileNav = (props) => {

    return (
        <section className="mobileNav">
            <nav className={`navMenuToggle${props.mobileNav ? " opened" : " close"}`} >
                <ul>
                <li><Link aria-label="Go to home page" to="/">Home</Link></li>
                <li><Link to="/storecatalogue">Store Catalogue</Link></li>
                <li><Link to="/aboutpage">About Page</Link></li>
                </ul>
            </nav>
            
        </section>
    )
}

export default MobileNav; 