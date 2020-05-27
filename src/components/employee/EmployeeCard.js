import React from "react";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./gary.jpg")} alt="My Employee" />
        </picture>
        <h3>
          Name: <span className="card-employeename">
            {props.employee.name}
          </span>
        </h3>
        <p>Mood: {props.employee.mood}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;