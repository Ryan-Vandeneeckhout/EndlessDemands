import { Link, useLocation } from "react-router-dom";
import "./NavBarUpperSite.scss";
import { useAuthContext } from "../../firebase/firebaseHooks/useAuthContext.js";
import ShoppingCartCounter from "../../firebase/ShoppingCartCounter.jsx";

const NavBarUpperSite = (props) => {

  const { user, authIsReady } = useAuthContext();

  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <>
      {authIsReady && (
        <nav className="upperSite">
          {/*Upper Site Button*/}
          <button
            aria-label="Mobile Navigation"
            onClick={props.MobileNavFunction}
            className={`NavMobile${props.mobileNav ? " rotating" : " not"}`}
          >
            <i
              className={`${props.mobileNav ? "fas fa-times" : "fas fa-bars"}`}
            />
          </button>
          {/*Nav Ul Links Main*/}
          <ul>
            <li>
              <Link
                className={splitLocation[1] === "" ? "active" : "not"}
                aria-label="Go to home page"
                to="/"
              >
                <span className="iconNav">
                  <i className="fa-solid fa-house-user" />{" "}
                </span>
                <span className="navText">Home</span>
              </Link>
            </li>
            <li>
              <Link
                className={
                  splitLocation[1] === "storecatalogue" ? "active" : "not"
                }
                to="/storecatalogue"
              >
                <span className="iconNav">
                  <i className="fa-solid fa-book-open" />{" "}
                </span>
                <span className="navText">Store Catalogue</span>
              </Link>
            </li>
            <li>
              <Link
                className={splitLocation[1] === "aboutpage" ? "active" : "not"}
                to="/aboutpage"
              >
                <span className="iconNav">
                  <i className="fa-solid fa-earth-americas" />{" "}
                </span>
                <span className="navText">About Page</span>
              </Link>
            </li>
            {user && <ShoppingCartCounter user={user} />}
            <li
              className={`accountButton${
                props.accountSettings ? " active" : " notActive"
              }`}
              onClick={props.AccountSettings}
            >
              <span className="iconNav">
                <i className="fa-solid fa-circle-user" />{" "}
              </span>
              <span className="navText">Account</span>
            </li>
          </ul>
          {/*Rainbow Button Music Menu*/}
          <button
            aria-label="Theme and Song Changer"
            onClick={props.ChangeStateFunction}
            className={`themeClick${props.showbox ? " rotating" : " not"}`}
          >
            <i
              className={`${props.showbox ? "fas fa-times" : "fas fa-bahai"}`}
            ></i>
          </button>
        </nav>
      )}
    </>
  );
};

export default NavBarUpperSite;
