import React from 'react';

const createEmployeeOptions = props => {
    return `<option value="${props.employee.name}">${props.employee.name}</option>`
}

export default createEmployeeOptions