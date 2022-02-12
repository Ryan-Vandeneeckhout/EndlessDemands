import Banner from "./Banner.js"; 
import "./HomePage.css";
import StoreFrontHome from "./StoreFrontHome.jsx";
import StoreFrontBrands from "./StoreFrontBrands.jsx";

const HomePage = () => {

    let lipstick = "Lipstick"; 
    let foundation = "Foundation"; 

    return (
        <section className="homePage">
            <Banner />
            <StoreFrontHome /> 
            <StoreFrontBrands productType={lipstick}/> 
            <div className="borderBanner top" />
            <StoreFrontBrands productType={foundation} /> 
            <div className="borderBanner bottom" />
        </section>
    )

}

export default HomePage; 