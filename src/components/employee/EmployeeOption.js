const createEmployeeOptions = (employee) => {
    return `<option value="${employee.name}">${employee.name}</option>`
}

export default createEmployeeOptions