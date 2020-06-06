import ApiManager from '../modules/ApiManager'

const hasId= (props, collection, id) => {
  ApiManager.get(collection, id).then(response => {
    if (!response) {
      window.alert('Page doesn\'t exist. Redirecting to Home.')
      props.history.push('/')  
    }
  })
  return true;
}

export default hasId