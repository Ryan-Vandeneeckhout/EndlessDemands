import Banner from "./Banner.js"; 
import "./HomePage.css";

const HomePage = () => {

    return (
        <section className="homePage">
            <Banner />
            <div className="storeFront">
                <div className="One">
                    <h3>Get the Look</h3>
                    <div className="storeFrontbuttonsList">
                        <button>Popp</button>
                        <button>Poos</button>
                    </div>
                </div>
                <div className="Two">
                    <ul>
                        <li>
                            <p>Hi</p>
                        </li>
                        <li>
                            <p>Hi</p>
                        </li>
                        <li>
                            <p>Hi</p>
                        </li>

                    </ul>
                    <img src="./homeImages/frontStore.jpg" alt="Woman Having Beautiful Red Lipstick put on with a makeup brush"></img>
                </div>
            </div>
            <div className="Three">

            </div>
        </section>
    )

}

export default HomePage; 