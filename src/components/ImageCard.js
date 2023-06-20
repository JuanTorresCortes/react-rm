// ImageCard.js
import React, { useState } from 'react';

const ImageCard = ({ character }) => {
  const { image, name, status, species, gender, origin } = character; // Destructure character prop
  const [toggleCard, setToggleCard] = useState("front"); // State to toggle between front and back view

  const handleToggleCard = () => {
    setToggleCard(toggleCard === "front" ? "back" : "front");
  };

  return (
    <div className="image-card" style={{ border: "2px solid blue" }}>
      {/* Display different content based on toggleCard state */}
      {toggleCard === "front" ? (
        <>
          <img src={image} alt="Character" />
          <h5>{name}</h5>
        </>
      ) : (
        <>
          <h5>{name}</h5>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <p>Origin: {origin.name}</p>
        </>
      )}
      {/* Button to toggle between front and back view */}
      <button onClick={handleToggleCard} style={{ backgroundColor: "blue" , marginBottom: "1em" }} >
        Toggle
      </button>
    </div>
  );
};

export default ImageCard;
