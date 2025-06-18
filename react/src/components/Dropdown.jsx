import React, { useState } from "react";

function CountryDropdown() {
  // State to hold the selected country
  const [selectedCountry, setSelectedCountry] = useState("");

  // Function to handle change in dropdown
  const handleChange = (event) => {
    // Update the state with the selected value
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      {/* Title */}
      <h2>Select Your Country:</h2>

      {/* Dropdown element */}
      <select value={selectedCountry} onChange={handleChange}>
        <option value="">-- Choose --</option>
        <option value="Nigeria">Nigeria</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="UK">UK</option>
      </select>

      <select>
        <option>house</option>
      </select>

      {/* Display selected country */}
      <h3>
        You selected: <span>{selectedCountry || "None"}</span>
      </h3>
    </div>
  );
}

export default CountryDropdown;
