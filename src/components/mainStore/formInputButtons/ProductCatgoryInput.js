import React from "react";
import { ProductCatogoriesSelectedMap } from "../../inputmaps/storeCatologueMaps/ProductCatogoriesSelectedMap.jsx";

const ProductCatgoryInput = (props) => {
  const renderProductCat = () => {
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

  return <>{renderProductCat()}</>;
};

export default ProductCatgoryInput;
