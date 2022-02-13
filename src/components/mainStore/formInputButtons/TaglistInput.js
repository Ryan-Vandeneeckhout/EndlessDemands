import { TaglistCatgoryItemsNavList } from "../../inputmaps/storeCatologueMaps/TaglistCatgoryITemsNavList.jsx";
import "./TaglistInput.css"; 
import React from "react";

class TaglistInput extends React.Component {
       
    shouldComponentUpdate() {
        return false;
    }

    buttonBackground = (event) => {

        let buttonSelectedFalse = document.getElementById(event.target.value);
        buttonSelectedFalse.style.backgroundColor = "gold"; 

    }

    buttonBackgroundNormalize = (event) => {
        let buttonSelectedFalse = document.getElementById(event.target.value);
        buttonSelectedFalse.style.backgroundColor = "whitesmoke"; 
    }
    
    render(){
        return (
      
            <div className="taglistFormContainer">

                {TaglistCatgoryItemsNavList.map((item, index) => {
                    return (
                        <button id={item.valueTaglistCategory} key={index} onClick={this.props.tagArray} className="tagListButton" value={item.valueTaglistCategory}>{item.valueTaglistCategory}
                        </button>
                    );
                })}

            
          
            </div>
        
       
        );
    }
  };
  
  export default TaglistInput;