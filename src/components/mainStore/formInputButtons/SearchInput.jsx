const SearchInput = (props) => {
//Search Button User Input Compnent// 
    return (
        <div className="searchBar">
            <div className="searchIcon">
              <i className="fas fa-search"></i>
            </div> 
            <input className="customSelect" type="text" id="fname" name="fname" placeholder="Search for Products" onChange={props.SearchInputAPI} />
        </div>
    )
}
export default SearchInput;  