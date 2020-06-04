import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import LocationManager from '../../modules/LocationManager';
import './EmployeeForm.css';

const EmployeeForm = props => {
    const [employee, setEmployee] = useState({ name: '', mood: '', locationId: 0 })
    const [isLoading, setIsLoading] = useState(false)
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        LocationManager.getAll().then(locations => setLocations(locations))
    }

    const handleFieldChange = e => {
        const stateToChange = {...employee}
        parseInt(e.target.value) ? stateToChange[e.target.id] = parseInt(e.target.value) : stateToChange[e.target.id] = e.target.value
        setEmployee(stateToChange)
    }

    const constructNewEmployee = e => {
        e.preventDefault()
        setIsLoading(true)
        EmployeeManager.post(employee).then(() => props.history.push('/employees'))
    }

    useEffect(() => getLocations(), []) 

    return (
        <>
          <form>
            <fieldset>
              <div className="formgrid">
                <input
                  type="text"
                  required
                  onChange={handleFieldChange}
                  id="name"
                  placeholder="Employee name"
                />
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  required
                  onChange={handleFieldChange}
                  id="mood"
                  placeholder="Employee Mood"
                />
                <label htmlFor="mood">Mood</label>
                <label htmlFor="locations">Assign a location:</label>
                <select 
                  value={employee.locationId}
                  id="locationId"
                  onChange={handleFieldChange}>
                  <option value="">Please assign a location</option>
                  {locations.map(location => <option value={location.id} key={location.id}>{location.name}</option>)}
                </select>
              </div>
              <div className="alignRight">
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={constructNewEmployee}
                >Submit</button>
              </div>
            </fieldset>
          </form>
        </>
    );
}

export default EmployeeForm