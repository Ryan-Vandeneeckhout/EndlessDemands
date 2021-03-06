import { TaglistCatgoryItemsNavList } from "../../inputmaps/storeCatologueMaps/TaglistCatgoryITemsNavList.jsx";
import TaglistIndivdualButton from "./TaglistIndividualButton.jsx";
import "./TaglistInput.scss";

const TaglistInput = (props) => {
  return (
    //Taglist Component Button JSX//
    <div
      className={`taglistFormContainer${
        props.taglistVisbility ? " visible" : " hidden"
      }`}
    >
      {TaglistCatgoryItemsNavList.map((item, index) => {
        return (
          <TaglistIndivdualButton
            setTagValue={props.setTagValue}
            key={index}
            valueTaglistCategory={item.valueTaglistCategory}
            tagArray={props.tagArray}
          />
        );
      })}
    </div>
  );
};

export default TaglistInput;