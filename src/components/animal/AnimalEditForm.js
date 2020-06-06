import React, { useState, useEffect } from "react"
import ApiManager from "../../modules/ApiManager"
import "./AnimalForm.css"

const AnimalEditForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
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

    // This is an edit, so we need the id
    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      breed: animal.breed,
      employeeId: animal.employeeId
    };

    const updateExistingAnimal = () => {
      ApiManager.update('animals', editedAnimal)
        .then(() => props.history.push("/animals"))
    }

  useEffect(() => {getEmployees()}, [])

  useEffect(() => {
    ApiManager.get('animals', props.match.params.animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
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
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default AnimalEditForm