import React, { useState, useEffect } from 'react';
//import the components we will need
import LocationCard from './LocationCard';
import ApiManager from '../../modules/ApiManager';

const LocationList = props => {
  // The initial state is an empty array
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    // After the data comes back from the API, we
    //  use the setLocations function to update state
    return ApiManager.getAll('locations').then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };

  const deleteLocation = id => {
    ApiManager.delete('locations', id).then(() => ApiManager.getAll('locations').then(setLocations))
  }

  // got the locations from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  // Finally we use map() to "loop over" the locations array to show a list of location cards
  return (
    <>
      {props.hasUser 
        ? 
        <section className="section-content">
          <button type="button" className="btn" onClick={() => props.history.push('/locations/new')}>Add Location</button>
        </section>
        :
        null
      }
      <div className="container-cards">
        {locations.map(location => 
          <LocationCard key={location.id} location={location} deleteLocation={deleteLocation} hasUser={props.hasUser} />
        )}
      </div>
    </>
  );
};

export default LocationList