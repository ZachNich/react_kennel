import React from "react";

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./shaeldon.jpg")} alt="My Owner" />
        </picture>
        <h3>Name: <span className="card-ownername">
          {props.owner.name}
        </span></h3>
        <p>Phone: {props.owner.phoneNumber}</p>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Goodbye!</button>
      </div>
    </div>
  );
};

export default OwnerCard;