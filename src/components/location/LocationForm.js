import React, { useState } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationForm.css';

const LocationForm = props => {
    const [location, setLocation] = useState({ name: '', address: '' })
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = e => {
        const stateToChange = {...location}
        stateToChange[e.target.id] = e.target.value
        setLocation(stateToChange)
    }

    const constructNewLocation = e => {
        e.preventDefault()
        if (location.name === '' || location.address === '') {
            window.alert('Please fill out all fields.')
        } else {
            setIsLoading(true)
            LocationManager.post(location).then(() => props.history.push('/locations'))
        }
    }

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
                  placeholder="Location name"
                />
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  required
                  onChange={handleFieldChange}
                  id="address"
                  placeholder="Address"
                />
                <label htmlFor="address">Address</label>
              </div>
              <div className="alignRight">
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={constructNewLocation}
                >Submit</button>
              </div>
            </fieldset>
          </form>
        </>
    );
}

export default LocationForm