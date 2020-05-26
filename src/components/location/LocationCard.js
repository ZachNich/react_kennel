import React from "react";

const LocationCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./location.png")} alt="My Location" />
        </picture>
        <h3>
          Type: <span className="card-employeename">Business</span>
        </h3>
        <p>Address: 500 Miles Pk.</p>
      </div>
    </div>
  );
};

export default LocationCard;