import { ProductTypeCatgory } from "../../inputmaps/storeCatologueMaps/ProductTypeCatgoryItemsNavList";

const ProductTypeInput = (props) => {
  //Product Type Component//
  return (
    <select
      name="productType"
      id="productType"
      onInput={props.ProductTypeInputing}
      className="customSelect productSelect"
    >
      {/*User Search for Product Type Component JSX*/}
      {ProductTypeCatgory.map((item) => {
        return (
          <option
            className="productTypeClass"
            value={item.valueProductTypeCategory}
            key={item.nameProductTypeCategory}
          >
            {item.nameProductTypeCategory}
          </option>
        );
      })}
    </select>
  );
};
export default ProductTypeInput;