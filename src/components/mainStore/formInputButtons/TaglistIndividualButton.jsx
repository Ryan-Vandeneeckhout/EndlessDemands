import { useRef, useState } from "react";

const TaglistIndivdualButton = (props) => {
    
    const [tagButtonSelected, setTagButtonSelected] = useState(false); 
    const tagButtonRef = useRef();
    
    const buttonClicked = (event) => {

        if (tagButtonSelected === false) {
            tagButtonRef.current.classList.add("clickedTagButton");
            props.setTagValue(event.target.value);
            props.tagArray(); 
            setTagButtonSelected(true);
        }
        else {
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