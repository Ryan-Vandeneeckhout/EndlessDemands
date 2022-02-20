import { useRef, useState } from "react";

const TaglistIndivdualButton = (props) => {
    //Taglist if Button Clicked Function Component// 
    
    const [tagButtonSelected, setTagButtonSelected] = useState(false); 
    const tagButtonRef = useRef();
    
    //Taglist Button Clicked function Handler// 
    const buttonClicked = (event) => {

        // Taglist if user Wishes to Add to Search 
        if (tagButtonSelected === false) {
            tagButtonRef.current.classList.add("clickedTagButton");
            props.setTagValue(event.target.value);
            props.tagArray(); 
            setTagButtonSelected(true);
        }
        else {
            //Taglist if user wishes to remove from search
            tagButtonRef.current.classList.remove("clickedTagButton");
            props.setTagValue(event.target.value);
            props.tagArray(); 
            setTagButtonSelected(false); 
        }
        
    }
    return (
        <button ref={tagButtonRef} key={props.index} onClick={buttonClicked}className="tagListButton" value={props.valueTaglistCategory}>{props.valueTaglistCategory}
        </button>
    )
}
export default TaglistIndivdualButton; 