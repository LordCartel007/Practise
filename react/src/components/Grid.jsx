import React from "react";

const GridFourBox = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      <div className="bg-blue-500 text-white p-6 rounded-lg">Box 1</div>
      <div className="bg-green-500 text-white p-6 rounded-lg">Box 2</div>
      <div className="bg-red-500 text-white p-6 rounded-lg">Box 3</div>
      <div className="bg-purple-500 text-white p-6 rounded-lg">Box 4</div>
    </div>
  );
};

export default GridFourBox;
