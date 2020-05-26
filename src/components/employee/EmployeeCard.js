import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./gary.jpg")} alt="My Employee" />
        </picture>
        <h3>
          Name: <span className="card-employeename">Gary</span>
        </h3>
        <p>Race: Human</p>
      </div>
    </div>
  );
};

export default EmployeeCard;