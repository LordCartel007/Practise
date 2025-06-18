import React, { useState } from "react";

function NameListBox() {
  // Step 1: Create state to hold names (initially hidden)
  const [showNames, setShowNames] = useState(false);

  // Step 2: Sample list of names
  const names = ["Ada", "John", "Bola", "Chinedu", "Grace"];

  // Step 3: Function to toggle visibility
  const handleClick = () => {
    setShowNames(!showNames); // show names when button is clicked
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Button to trigger showing names */}
      <button onClick={handleClick}>Show Names</button>

      {/* Step 4: Conditionally render the box when showNames is true */}
      {showNames && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "5px",
            width: "200px",
          }}
        >
          <h4>Names:</h4>
          {/* Step 5: Map through names and show each one in a <div> */}
          {names.map((name, index) => (
            <div key={index}>{name}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NameListBox;
