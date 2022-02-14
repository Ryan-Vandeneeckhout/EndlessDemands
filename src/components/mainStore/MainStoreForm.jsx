import ProductTypeInput from "./formInputButtons/ProductTypeInput";
import BrandInput from "./formInputButtons/BrandInput";
import ProductCatgoryInput from "./formInputButtons/ProductCatgoryInput";
import SearchInput from "./formInputButtons/SearchInput";

const MainStoreForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className="storePageForm" onSubmit={handleSubmit}>
            <BrandInput BrandInput={props.BrandInput} />
            <ProductTypeInput ProductTypeInputing={props.ProductTypeInput} />
            <ProductCatgoryInput ProductCatgoryInput={props.ProductCatgoryInput} productTypeRef={props.productTypeRef} />
            <SearchInput SearchInputAPI={props.SearchInputAPI} />            
        </form>
        
            

    )
}

export default MainStoreForm; 