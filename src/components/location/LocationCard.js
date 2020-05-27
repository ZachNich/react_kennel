import React from "react";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./location.png")} alt="My Location" />
        </picture>
        <h3> Name: <span className="card-employeename">
          {props.location.name}
        </span></h3>
        <p>Address: {props.location.address}</p>
      </div>
    </div>
  );
};

export default LocationCard;