import { BrandCatgory } from "../../inputmaps/storeCatologueMaps/BrandCatgoryItemsNavList";

const BrandInput = (props) => {

    return (
       
      <select name="brand" id="brand" onInput={props.BrandInput} className="customSelect brandSelect">
        <option className="brandTypeClass" value="">Choose A Brand:</option>
            
            {BrandCatgory.map((item, brandindex) => {
              return (
                <option className="brandTypeClass" value={item.valueBrandCategory} key={brandindex}>{item.valueBrandCategory}
              </option>
              );
            })}
        </select>
       
    );
  
  };
  
  export default BrandInput;