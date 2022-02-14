import ProductItem from "../../pages/ProductItem";
import { Link } from "react-router-dom";

const StoreItems = (props) => {

  const renderStoreList = () => {
 
        
      if (
          props.productItem !== null ||
          props.productItem !== undefined ||
          props.productItem.length !== 0 ||
          props.productItem !== "" || props.ProductItem !== []
      ) {

       
      return (
          <ul className="productListMakeupAPI">
          {props.productItem.map((item) => {
            return (

              <Link to={`/${item.id}`}>
              <ProductItem
                key={item.id}
                brandname={item.brand}
                productType={item.category}
                currencyType={item.currency}
                name={item.name}
                image={item.image_link}
                imagealt={item.api_featured_image}
                price={item.price}
                rating={item.rating}
                tags={item.tag_list}
                />
              </Link>
            );
          })}
        </ul>
      );
    }  
      
  };

  return <div className="storeContainer">{renderStoreList()}</div>;
};

export default StoreItems;
