import React, { useState } from "react";

export default function PriceSliderInput(props) {
  const [valuePrice, onChange] = useState(0);
//Price Slider Component// 
  return (
    <div className="slider-parent">
      {/*Price Slider Slide Bar JSX*/}
      <input
        className="sliderStore"
        id="price"
        placeholder="Search for Products"
        type="range"
        min="0"
        max="75"
        value={`${valuePrice}`}
        onChange={({ target: { value: radius } } ) => {
          onChange(radius); props.slide(`${valuePrice}`);

        }}
      />
      <div 
        className="storeSlider"
        id="slider"
      >
          {/*Price Output*/}
        <p>
      Price less than $${valuePrice} Dollars
        </p>
      </div>
    </div>
  );
}
