import React, { useState } from "react";

export default function PriceSliderInput(props) {
  const [hello, onChange] = useState(0);

  return (
    <div className="slider-parent">
      <input
        className="sliderStore"
        id="price"
        placeholder="Search for Products"
        type="range"
        min="0"
        max="75"
        value={`${hello}`}
        onChange={({ target: { value: radius } } ) => {
          onChange(radius); props.slide(`${hello}`);

        }}
      />
      <div 
        className="storeSlider"
        id="slider"
      >
        <p>
      Price less than $${hello} Dollars
        </p>
      </div>
    </div>
  );
}
