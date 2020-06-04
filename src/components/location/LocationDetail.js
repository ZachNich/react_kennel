import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css';
import EmployeeCard from '../employee/EmployeeCard'
import handleNoId from '../../helpers/handleNoId'

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.getWithEmployees(props.locationId)
      .then(location => {
        setLocation({
          name: location.name,
          address: location.address
        });
      setIsLoading(false);
      setEmployees(location.employees);
      });
  }, [props.locationId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  handleNoId(props, location)

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./location.png')} alt="My Location" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
        <p>Address: {location.address}</p>
        {props.hasUser ? <button type="button" disabled={isLoading} onClick={handleDelete}>Close</button> : null}
      </div>      
        {employees.map(employee => 
          <EmployeeCard key={employee.id} employee={employee} {...props} />
        )}
    </div>
  );
}

export default LocationDetail;