import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import './AnimalForm.css'

const AnimalForm = props => {
    const [animal, setAnimal] = useState({ name: "", breed: "", employeeId: 0 });
    const [isLoading, setIsLoading] = useState(false);
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
      return ApiManager.getAll('employees')
        .then(employees => {setEmployees(employees)})
    }

    const handleFieldChange = e => {
        const stateToChange = { ...animal };
        parseInt(e.target.value) ? stateToChange[e.target.id] = parseInt(e.target.value) : stateToChange[e.target.id] = e.target.value
        setAnimal(stateToChange);
    };

    const constructNewAnimal = e => {
        e.preventDefault();
        if (animal.name === "" || animal.breed === "" || animal.employeeId === "") {
            window.alert('Please fuck off.');
        } else {
            setIsLoading(true);
            ApiManager.post('animals', animal)
                .then(() => props.history.push('/animals'))
        }
    };

    useEffect(() => {getEmployees()}, [])

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
                  placeholder="Animal name"
                />
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  required
                  onChange={handleFieldChange}
                  id="breed"
                  placeholder="Breed"
                />
                <label htmlFor="breed">Breed</label>
                <label htmlFor="employees">Assign an employee:</label>
                <select 
                  value={animal.employeeId}
                  id="employeeId"
                  onChange={handleFieldChange}>
                  <option value="">Please choose a caretaker</option>
                  {employees.map(employee => <option value={employee.id} key={employee.id}>{employee.name}</option>)}
                </select>
              </div>
              <div className="alignRight">
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={constructNewAnimal}
                >Submit</button>
              </div>
            </fieldset>
          </form>
        </>
    );
};

export default AnimalForm