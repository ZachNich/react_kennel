import React from "react";

const OwnerCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./shaeldon.jpg")} alt="My Owner" />
        </picture>
        <h3>
          Name: <span className="card-ownername">Shaeldon</span>
        </h3>
        <p>Status: Disagreeable</p>
      </div>
    </div>
  );
};

export default OwnerCard;