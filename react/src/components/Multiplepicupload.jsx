import React, { useState } from "react";

function MultiImageUploader() {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Image = reader.result;

        setImages((prevImages) => {
          const updated = [...prevImages, base64Image];
          localStorage.setItem("uploadedImages", JSON.stringify(updated)); // Save all images
          return updated;
        });
      };

      reader.readAsDataURL(file); // Convert to base64
    });
  };

  const handleDelete = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
    localStorage.setItem("uploadedImages", JSON.stringify(updated));
  };

  return (
    <div>
      <button className="text-blue-500">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
      </button>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {images.map((img, idx) => (
          <div key={idx} style={{ position: "relative" }}>
            <img
              src={img}
              alt={`Upload ${idx}`}
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <button
              onClick={() => handleDelete(idx)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "25px",
                height: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MultiImageUploader;
