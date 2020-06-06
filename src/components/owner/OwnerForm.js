import React, { useState } from 'react';
import ApiManager from '../../modules/ApiManager';
import './OwnerForm.css';

const OwnerForm = props => {
    const [owner, setOwner] = useState({ name: '', phoneNumber: '' })
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = e => {
        const stateToChange = {...owner}
        stateToChange[e.target.id] = e.target.value
        setOwner(stateToChange)
    }

    const constructNewOwner = e => {
        e.preventDefault()
        if (owner.name === '' || owner.phoneNumber === '') {
            window.alert('Owner name and phone number required.')
        } else {
            setIsLoading(true)
            ApiManager.post('owners', owner).then(() => props.history.push('/owners'))
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
                  placeholder="Owner name"
                />
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  required
                  onChange={handleFieldChange}
                  id="phoneNumber"
                  placeholder="Phone Number"
                />
                <label htmlFor="phoneNumber">Phone Number</label>
              </div>
              <div className="alignRight">
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={constructNewOwner}
                >Submit</button>
              </div>
            </fieldset>
          </form>
        </>
    );
}

export default OwnerForm