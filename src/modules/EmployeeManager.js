const remoteURL = "http://localhost:5002"

export default {
  getWithAnimals(id) {
    return fetch(`${remoteURL}/employees/${id}?_embed=animals`)
      .then(result => result.json())
   },
  getAll() {
    return fetch(`${remoteURL}/employees`)
      .then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
}