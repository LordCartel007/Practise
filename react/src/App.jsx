// import React, { useState } from 'react';

// function InputLogger() {
//   const [text, setText] = useState('');

//   const handleChange = (e) => {
//     setText(e.target.value);
//     console.log(e.target.value);
//   };

//   return (
//     <div>
//       <h2>Type something:</h2>
//       <input
//         type="text"
//         value={text}
//         onChange={handleChange}
//         placeholder="Enter text..."
//       />
//     </div>
//   );
// }

// export default InputLogger;

// import React, { useState, useEffect } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log('Count changed:', count);
//   }, [count]); // run every time `count` changes

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import Greetings from "./components/Greetings";

// function add() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("another added");
//   }, [count]);
//   function Welcome({ house, city }) {
//     return (
//       <h2>
//         {" "}
//         Lord Of the north from {city} , from the house of {house}
//       </h2>
//     );
//   }
//   return (
//     <>
//       <h1> count : {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//       <h1>
//         {" "}
//         <Greetings name="tom" />
//       </h1>
//       <>
//         <Welcome house="el" city="winterfell" />
//       </>
//     </>
//   );
// }

// export default add;

import React, { useState, useEffect } from "react";
import GridFourBox from "./components/Grid";
import CountryDropdown from "./components/Dropdown";
import NameListBox from "./components/Showbox";
import SearchFilter from "./components/Searchfilter";
import ImageUploader from "./components/Imageupload";
import MultiImageUploader from "./components/Multiplepicupload";
import ReduxCounter from "./components/Reduxcounter";
import { useTheme } from "./components/ThemeContext";
// function userList() {
// const [users, setUsers] = useState([]);
// const [error, setError] = useState("");

// useEffect(() => {
//   const fetchUser = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       if (!response.ok) throw new Error("failed to fetch");
//       const data = await response.json();
//       setUsers(data);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   fetchUser();
// }, []);

function userList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const { theme, toggleTheme } = useTheme();

  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#00e5ff" : "#111",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("failed to fetch");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold underline text-red-900">Users:</h2>
        {error && <p style={{ color: "red " }}>{error}</p>}
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <div style={styles}>
        <h1>{theme.toUpperCase()} MODE</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>

        <GridFourBox />
        <CountryDropdown />
        <NameListBox />
        <SearchFilter />
        <ImageUploader />
        <MultiImageUploader />
        <ReduxCounter />
      </div>
    </>
  );
}

export default userList;
{
  /* <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul> */
}
{
  /* {error && <p style={{ color: "red" }}>{error}</p>} */
}
