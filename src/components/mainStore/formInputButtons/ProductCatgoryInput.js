import React from "react";
import { ProductCatogoriesSelectedMap } from "../../inputmaps/storeCatologueMaps/ProductCatogoriesSelectedMap.jsx";

const ProductCatgoryInput = (props) => {
  //Product Catpory Dynamic Gen From Product Type Component// 
  const renderProductCat = () => {
    //If Product Type is Null// 
    if (props.productTypeRef === null || props.productTypeRef === "")
      return (
        <select
          name="categoryType"
          id="categoryType"
          onInput={props.ProductCatgoryInput}
          className="customSelect categorySelect"
        >
          return{" "}
          <option className="categoryType" value="">
            Please Select a Product Type
          </option>
        </select>
      );
    //If Product Type Selected is blush 
    else if (props.productTypeRef === "blush") {
      return (
        <select
          name="categoryType"
          id="categoryType"
          onInput={props.ProductCatgoryInput}
          className="customSelect  categorySelect"
        >
          {ProductCatogoriesSelectedMap.map((item, index) => {
            return (
              <option
                className="categoryType"
                value={item.valueProductBlushCategory}
                key={index}
              >
                {item.nameProductBlushCategory}
              </option>
            );
          })}
        </select>
      );
          //If Product Type Selected is Bronzer
    } else if (props.productTypeRef === "bronzer") {
      return (
        <select
          name="categoryType"
          id="categoryType"
          onInput={props.ProductCatgoryInput}
          className="customSelect categorySelect"
        >
          <option className="categoryType" value="">
            All
          </option>
          <option className="categoryType" value="">
            All
          </option>
          <option className="categoryType" value="powder">
            Powder
          </option>
        </select>
      );
          //If Product Type Selected is Eyeliner 
    } else if (props.productTypeRef === "eyeliner") {
      return (
        <select
          name="categoryType"
          id="categoryType"
          onInput={props.ProductCatgoryInput}
          className="customSelect categorySelect"
        >
          <option className="categoryType" value="">
            All
          </option>
          <option className="categoryType" value="">
            All
          </option>
          <option className="categoryType" value="liquid">
            Liquid
          </option>
          <option className="categoryType" value="pencil">
            Pencil
          </option>
          <option className="categoryType" value="gel">
            Gel
          </option>
          <option className="categoryType" value="cream">
            Cream
          </option>
        </select>
      );
          //If Product Type Selected is Foundation// 
    } else if (props.productTypeRef === "foundation") {
      return (
        <select
          name="categoryType"
          id="categoryType"
          onInput={props.ProductCatgoryInput}
          className="customSelect categorySelect"
        >
          <option className="categoryType" value="">
            All
          </option>
          <option className="categoryType" value="">
            All
          </option>
          <option className="categoryType" value="concealer">
            concealer
          </option>
          <option className="categoryType" value="liquid">
            Liquid
          </option>
          <option className="categoryType" value="contour">
            contour
          </option>
          <option className="categoryType" value="bb cc">
            BB CC
          </option>
          <option className="categoryType" value="cream">
            Cream
          </option>
          <option className="categoryType" value="mineral">
            Mineral
          </option>
          <option className="categoryType" value="powder">
            Powder
          </option>
          <option className="categoryType" value="highlighter">
            Highlighter
          </option>
        </select>
      );
          //If Product Type Selected is Lipstick
    } else if (props.productTypeRef === "lipstick") {
      return (
        <select
          name="categoryType"
          id="categoryType"
          onInput={props.ProductCatgoryInput}
          className="customSelect categorySelect"
        >
          <option className="categoryType" value="">
            All
          </option>
          <option className="categoryType" value="">
            All
          </option>
          <option className="categoryType" value="lipstick">
            Lipstick
          </option>
          <option className="categoryType" value="lip_gloss">
            Lip Gloss
          </option>
          <option className="categoryType" value="liquid">
            Liquid
          </option>
        </select>
      );
          //If Product Type Selected is Eyeshadow// 
    } else if (props.productTypeRef === "eyeshadow") {
      return (
        <select
          name="categoryType"
          id="categoryType"
          onInput={props.ProductCatgoryInput}
          className="customSelect categorySelect"
        >
          <option className="categoryType" value="">
            All
          </option>
          <option className="categoryType" value="">
            All
          </option>
          <option className="categoryType" value="palette">
            Palette
          </option>
          <option className="categoryType" value="pencil">
            Pencil
          </option>
          <option className="categoryType" value="cream">
            Cream
          </option>
        </select>
      );
          //If Product Type Selected is Unavaible
    } else {
      return (
        <select
          name="categoryType"
          id="categoryType"
          className="customSelect categorySelect"
        >
          return{" "}
          <option className="categoryType" value="">
            Product Category unavailable
          </option>
        </select>
      );
    }
  };
//Conditonial Rendering for Product Catogory// 
  return <>{renderProductCat()}</>;
};

export default ProductCatgoryInput;
