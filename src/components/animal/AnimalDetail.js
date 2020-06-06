import React, { useState, useEffect } from "react";
import ApiManager from "../../modules/ApiManager";
import "./AnimalDetail.css";

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from ApiManager and hang on to the data; put it into state
    ApiManager.get('animals', props.animalId).then(animal => {
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
    ApiManager.delete('animals', props.animalId).then(() =>
      props.history.push("/animals")
    );
  };

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