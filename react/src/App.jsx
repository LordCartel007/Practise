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

import React, { useState } from "react";

function Typing() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div>Type here</div>
      <input
        placeholder="type here"
        value={text}
        onChange={handleChange}
      ></input>
    </>
  );
}
export default Typing;
