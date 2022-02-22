import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Posts from "../../firebase/Posts";
import ButtonLiked from "../LikedButton";
import "./ProductPage.scss";

const ProductPage = () => {
  const [individualProducts, setIndividualProduct] = useState({});
  const itemid = useParams();

  const renderTaglistHighlights = () => {
    if (tag_list === undefined || tag_list.length === 0);
    else {
      return (
        //Conditional Rendering of Taglist Next Project Find a way to do this without the bloated Code
        <div className="taglist">
          {renderPurpicks()}
          {renderCanadain()}
          {renderCertClean()}
          {renderChemicalFree()}
          {renderDairyFree()}
          {renderEWGVerified()}
          {renderEcoCert()}
          {renderFairTrade()}
          {renderGlutenFree()}
          {renderHypoallergenic()}
          {renderNatural()}
          {renderNoTalc()}
          {renderNonGmo()}
          {renderOrganic()}
          {renderPeanutFreeProduct()}
          {renderSugarFree()}
          {renderUSDAOrganic()}
          {renderVegan()}
          {renderAlcoholFree()}
          {renderCrueltyFree()}
          {renderOilFree()}
          {renderSiliconeFree()}
          {renderWaterFree()}
        </div>
      );
    }
  };
  //Vegan Tag conditionial
  const renderVegan = () => {
    if (tag_list.includes("Vegan")) {
      return (
        <div className="lol">
          <p>Vegan</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>Vegan</p>
          {renderNO()}
        </div>
      );
    }
  };
  //Canadain Tag conditionial
  const renderCanadain = () => {
    if (tag_list.includes("canadian")) {
      return (
        <div className="lol">
          <p>Canadain</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>Canadain</p>
          {renderNO()}
        </div>
      );
    }
  };
  //If Taglist does not Contain Render
  const renderNO = () => {
    return <p>Not Approved</p>;
  };
  //If Taglist does Contain
  const renderYes = () => {
    return <p>Approved</p>;
  };
  //Cert Clean Conditional
  const renderCertClean = () => {
    if (tag_list.includes("Cert Clean")) {
      return (
        <div className="lol">
          <p>Cert Clean</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>Cert Clean</p>
          {renderNO()}
        </div>
      );
    }
  };
  //Chemical Tag conditionial
  const renderChemicalFree = () => {
    if (tag_list.includes("Chemical Free")) {
      return (
        <div className="lol">
          <p>Chemical Free</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>Chemical Free</p>
          {renderNO()}
        </div>
      );
    }
  };
  //Dairy free Tag conditionial
  const renderDairyFree = () => {
    if (tag_list.includes("Dairy Free")) {
      return (
        <div className="lol">
          <p>Dairy Free</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>Dairy Free</p>
          {renderNO()}
        </div>
      );
    }
  };
  //Purpicks Tag conditionial
  const renderPurpicks = () => {
    if (tag_list.includes("purpicks")) {
      return (
        <div className="lol">
          <p>Purpicks</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>Purpicks</p>
          {renderNO()}
        </div>
      );
    }
  };
  //EWG Verified Conditional
  const renderEWGVerified = () => {
    if (tag_list.includes("EWG Verified")) {
      return (
        <div className="lol">
          <p>EWG Verified</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>EWG Verified</p>
          {renderNO()}
        </div>
      );
    }
  };
  //EcoCert Tag conditionial
  const renderEcoCert = () => {
    if (tag_list.includes("EcoCert")) {
      return (
        <div className="lol">
          <p>EcoCert</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>EcoCert</p>
          {renderNO()}
        </div>
      );
    }
  };
  //Fair Trade Tag conditionial
  const renderFairTrade = () => {
    if (tag_list.includes("Fair Trade")) {
      return (
        <div className="lol">
          <p>Fair Trade</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>Fair Trade</p>
          {renderNO()}
        </div>
      );
    }
  };
  //Gluten Free Tag conditionial
  const renderGlutenFree = () => {
    if (tag_list.includes("Gluten Free")) {
      return (
        <div className="lol">
          <p>Gluten Free</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>Gluten Free</p>
          {renderNO()}
        </div>
      );
    }
  };
  //HypoAllegneric Tag conditionial
  const renderHypoallergenic = () => {
    if (tag_list.includes("Hypoallergenic")) {
      return (
        <div className="lol">
          <p>Hypoallergenic</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>Hypoallergenic</p>
          {renderNO()}
        </div>
      );
    }
  };
  //Natural Tag condtional
  const renderNatural = () => {
    if (tag_list.includes("Natural")) {
      return (
        <div className="lol">
          <p>Natural</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>Natural</p>
          {renderNO()}
        </div>
      );
    }
  };
  //No Talc Condtional
  const renderNoTalc = () => {
    if (tag_list.includes("No Talc")) {
      return (
        <div className="lol">
          <p>No Talc</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>No Talc</p>
          {renderNO()}
        </div>
      );
    }
  };
  const renderNonGmo = () => {
    if (tag_list.includes("Non-Gmo")) {
      return (
        <div className="lol">
          <p>Non-Gmo</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>Non-Gmo</p>
          {renderNO()}
        </div>
      );
    }
  };
  //Oragnic Tag Conditinal
  const renderOrganic = () => {
    if (tag_list.includes("organic")) {
      return (
        <div className="lol">
          <p>Organic</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>Organic</p>
          {renderNO()}
        </div>
      );
    }
  };
  //Nut Free Con
  const renderPeanutFreeProduct = () => {
    if (tag_list.includes("Peanut Free Product")) {
      return (
        <div className="lol">
          <p>Peanut Free Product</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>Peanut Free Product</p>
          {renderNO()}
        </div>
      );
    }
  };
  //Sugar Free Con
  const renderSugarFree = () => {
    if (tag_list.includes("Sugar Free")) {
      return (
        <div className="lol">
          <p>Sugar Free</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>Sugar Free</p>
          {renderNO()}
        </div>
      );
    }
  };
  //Organic cond
  const renderUSDAOrganic = () => {
    if (tag_list.includes("USDA Organic")) {
      return (
        <div className="lol">
          <p>USDA Organic</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>USDA Organic</p>
          {renderNO()}
        </div>
      );
    }
  };

  const renderAlcoholFree = () => {
    if (tag_list.includes("alcohol free")) {
      return (
        <div className="lol">
          <p>Alcohol Free</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>Alcohol Free</p>
          {renderNO()}
        </div>
      );
    }
  };
  const renderCrueltyFree = () => {
    if (tag_list.includes("cruelty free")) {
      return (
        <div className="lol">
          <p>Cruelty Free</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>Cruelty Free</p>
          {renderNO()}
        </div>
      );
    }
  };
  const renderOilFree = () => {
    if (tag_list.includes("alcohol free")) {
      return (
        <div className="lol">
          <p>Oil Free</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>Oil Free</p>
          {renderNO()}
        </div>
      );
    }
  };
  const renderSiliconeFree = () => {
    if (tag_list.includes("alcohol free")) {
      return (
        <div className="lol">
          <p>Silicone Free</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>Silicone Free</p>
          {renderNO()}
        </div>
      );
    }
  };
  const renderWaterFree = () => {
    if (tag_list.includes("alcohol free")) {
      return (
        <div className="lol">
          <p>Water Free</p>
          {renderYes()}
        </div>
      );
    } else {
      return (
        <div className="No">
          <p>Water Free</p>
          {renderNO()}
        </div>
      );
    }
  };
  const page = true;
  //Render Rating Function

  const renderRating = () => {
    if (rating === null)
      //No Rating
      return (
        <p className="productParagraph">
          Rating: Unfortunately, there is No Rating Currently Available. Be the
          First To Rate!
        </p>
      );
    else {
      //Rating Aviable
      return <p className="productParagraph">Rating: {rating} Stars.</p>;
    }
  };
  //Price Render Function
  const renderPrice = () => {
    if (price === null || price === "0.0")
      //No Price
      return <p className="productParagraph">Price: Currently Unavailable.</p>;
    else {
      //Price Aviable render to two decimal places
      let Z = parseFloat(price).toFixed(2);

      return (
        <a
          className="productPageBuyNowLink productParagraph"
          href={product_link}
        >
          Buy Now for ${Z}
        </a>
      );
    }
  };
  //render if the product has aviable colours map
  const renderColors = () => {
    if (product_colors === undefined || product_colors.length === 0);
    else {
      return (
        <div className="coloursWrapper">
          {product_colors.map((product) => {
            return (
              <div className="colourItem" key={product.hex_value}>
                <div
                  className="colourCircle"
                  style={{ background: `${product.hex_value}` }}
                >
                  {product.hex_value}
                </div>
                <p>{product.colour_name}</p>
              </div>
            );
          })}
        </div>
      );
    }
  };
  //Render Item if it has a description
  const renderLongDescription = () => {
    let Z = document.getElementById("Sept");

    if (
      description === undefined ||
      description.length === 0 ||
      description === null
    );
    else {
      //Api calls HTML for description so render to specific element
      if (Z === undefined || Z === null);
      else {
        Z.innerHTML = `${description}`;
      }
    }
  };
  //Auto Scroll User to Top if needed//
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    axios({
      url: `https://mycorsproxywinner.herokuapp.com/https://makeup-api.herokuapp.com/api/v1/products/${itemid.itemid}.json`,
    }).then((response) => {
      setIndividualProduct(response.data);
    });
  }, [itemid.itemid]);
  //Destructure the passed props of indidvualproducts
  const {
    api_featured_image,
    description,
    product_link,
    brand,
    name,
    rating,
    tag_list,
    product_colors,
    price,
  } = individualProducts;
  //Main JSx for the Product Page Component
  return (
    <div className="wrapperProductPage">
      <div className="ProductPageContainer">
        <div className="imageProductPage">
          <div className="imageContainerProductPage2">
            <img
              src={api_featured_image ? api_featured_image : null}
              alt={`${name}`}
            />
          </div>
        </div>
        <div className="paragrapghContainerProductPage">
          <h3 className="nameProduct">{name} W</h3>
          <h4 className="productPageSubHeading">Brought to you by - {brand}</h4>
          {renderLongDescription()}
          <p id="Sept" className="Sept"></p>
          <p id="priceSep" className="SeptPrice"></p>
          <p id="Eight" className="Eight"></p>
          {renderPrice()}
          {renderRating()}
          <ButtonLiked individualProducts={individualProducts} />
          <p className="storeLink">
            <Link to="/storecatalogue">Click to Go Back to Store</Link>
          </p>
        </div>
        {renderColors()}
        {renderTaglistHighlights()}
        <div className="PostWrapper">
          <Posts page={page} passedprops={itemid.itemid} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;