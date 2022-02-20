import Banner from "./Banner.jsx";
import "./HomePage.css";
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
      <StoreFrontBrands productType={lipstick} />
      <div className="borderBanner top">
        <h2>Endless Demands Showcase Foundations</h2>
      </div>
      <StoreFrontBrands productType={foundation} />
      <div className="borderBanner bottom">
        <h2>Brand Name Comestics Sale</h2>
      </div>
    </section>
  );
};

export default HomePage;
