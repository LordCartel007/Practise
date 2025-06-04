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

function typing() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div>
        <h1>
          type anything
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="type"
          ></input>
        </h1>
      </div>
    </>
  );
}

export default typing;
