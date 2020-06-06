const remoteURL = "http://localhost:5002"

export default {
    get(arrName, id) {
      return fetch(`${remoteURL}/${arrName}/${id}`).then(result => result.json())
    },
    getWithEmbed(arrName, id, embed) {
        return fetch(`${remoteURL}/${arrName}/${id}?_embed=${embed}`)
          .then(result => result.json())
    },
    getAll(arrName) {
      return fetch(`${remoteURL}/${arrName}`).then(result => result.json())
    },
    delete(arrName, id) {
      return fetch(`${remoteURL}/${arrName}/${id}`, {
        method: "DELETE"
      }).then(result => result.json())
    },
    post(arrName, object) {
      return fetch(`${remoteURL}/${arrName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
      }).then(result => result.json())
    },
    update(arrName, object) {
      return fetch(`${remoteURL}/${arrName}/${object.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
      }).then(data => data.json());
    },
    getRandomId(arrName) {
      return fetch(`${remoteURL}/${arrName}`)
        .then(result => result.json())
        .then(objects => {
          const randomIndex = Math.floor(Math.random() * objects.length);
          const randomObject = objects[randomIndex];
          return randomObject.id;
      });
    }
  }