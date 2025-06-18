import React, { useState } from "react";

function SearchFilter() {
  // Sample array of people
  const people = [
    { name: "Ada", age: 22 },
    { name: "John", age: 30 },
    { name: "Bola", age: 27 },
    { name: "Grace", age: 25 },
    { name: "Chinedu", age: 30 },
  ];

  // State to hold search input
  const [search, setSearch] = useState("");

  // Filter the list based on search (by name or age)
  const filteredPeople = people.filter((person) => {
    return (
      person.name.toLowerCase().includes(search.toLowerCase()) ||
      person.age.toString().includes(search)
    );
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search People (by name or age):</h2>

      {/* Search input field */}
      <input
        type="text"
        placeholder="Type a name or age..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "20px",
          width: "200px",
          borderRadius: "5px",
          border: "1px solid gray",
        }}
      />

      {/* Show filtered results */}
      <div>
        {filteredPeople.length > 0 ? (
          filteredPeople.map((person, index) => (
            <div key={index}>
              {person.name} - {person.age} years old
            </div>
          ))
        ) : (
          <p>No match found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchFilter;
