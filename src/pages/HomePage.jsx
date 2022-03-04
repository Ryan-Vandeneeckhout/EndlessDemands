import Banner from "./Banner.jsx";
import "./HomePage.scss";
import StoreFrontHome from "./StoreFrontHome.jsx";
import StoreFrontBrands from "./StoreFrontBrands.jsx";

const HomePage = () => {
  //Product Type for Array One and Two
  const lipstick = "Lipstick";
  const foundation = "Foundation";

  return (
    <section className="homePage">
      <Banner />
      <StoreFrontHome />
      <div className="storeFrontRelativeContainer">
        <StoreFrontBrands productType={lipstick} />
        </div>
      <div className="borderBanner top">
        <h2>Endless Demands Showcase Foundations</h2>
      </div>
      <div className="storeFrontRelativeContainer">
       <StoreFrontBrands productType={foundation} />
      </div>
    
      <div className="borderBanner bottom">
        <h2>Brand Name Comestics Sale</h2>
      </div>
    </section>
  );
};

export default HomePage;
