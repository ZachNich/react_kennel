import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalDetail.css";
import handleNoId from '../../helpers/handleNoId'

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId).then(animal => {
      setAnimal({
        name: animal.name,
        breed: animal.breed
      });
      setIsLoading(false);
    });
  }, [props.animalId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };


  handleNoId(props, animal)

    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require("./dog.svg")} alt="My Dog" />
          </picture>
          <h3>
            Name: <span style={{ color: "darkslategrey" }}>{animal.name}</span>
          </h3>
          <p>Breed: {animal.breed}</p>
          {props.hasUser ? <button type="button" disabled={isLoading} onClick={handleDelete}>Discharge</button> : null}
        </div>
      </div>
    );
};

export default AnimalDetail;