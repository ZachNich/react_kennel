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
        <button type="button" onClick={() => props.history.push(`/employees/${props.employee.id}`)}>Details</button>
        <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fire!</button>
      </div>
    </div>
  );
};

export default EmployeeCard;