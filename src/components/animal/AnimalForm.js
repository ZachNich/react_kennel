import React, { useState } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import EmployeeManager from '../../modules/EmployeeManager';
import EmployeeOptions from '../employee/EmployeeOption';
import './AnimalForm.css'

const AnimalForm = props => {
    const [animal, setAnimal] = useState({ name: "", breed: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = e => {
        const stateToChange = { ...animal };
        stateToChange[e.target.id] = e.target.value;
        setAnimal(stateToChange);
    };

    const constructNewAnimal = e => {
        e.preventDefault();
        if (animal.name === "" || animal.breed === "") {
            window.alert('Please input animal name and breed.');
        } else {
            setIsLoading(true);
            AnimalManager.post(animal)
                .then(() => props.history.push('/animals'))
        }
    };

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
              </div>
              <div className="alignRight">
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={constructNewAnimal}
                >Submit</button>
              </div>
            </fieldset>
            <fieldset>
                <label for="employees">Assign an employee:</label>
                <select 
                    name="employees" 
                    id="employees-select"></select>
            </fieldset>
          </form>
        </>
    );
};

export default AnimalForm