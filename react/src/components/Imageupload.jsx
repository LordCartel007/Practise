import React, { useState, useEffect } from "react";

function ImageUploader() {
  const [image, setImage] = useState(null);

  // Load image from localStorage on component mount
  useEffect(() => {
    const savedImage = localStorage.getItem("uploadedImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Image = reader.result;
        setImage(base64Image); // set in state
        localStorage.setItem("uploadedImage", base64Image); // save to localStorage
      };

      reader.readAsDataURL(file); // convert to base64
    }
  };

  // Delete the image
  const handleDelete = () => {
    setImage(null); // remove from state
    localStorage.removeItem("uploadedImage"); // remove from localStorage
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Your Picture</h2>

      {!image && (
        <button className="text-blue-500">
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </button>
      )}

      {image && (
        <div style={{ position: "relative", display: "inline-block" }}>
          <img
            src={image}
            alt="Uploaded"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
          {/* X button to delete */}
          <button
            onClick={handleDelete}
            style={{
              position: "absolute",
              top: "8px",
              right: "5px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              cursor: "pointer",
              display: "flex", // Center using Flexbox
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px", // Optional: adjust size
              padding: 0,
            }}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
