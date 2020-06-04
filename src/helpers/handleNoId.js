const handleNoId = (props, object) => {
    if (Object.values(object).includes('')) {
      window.alert('Page doesn\'t exist. Redirecting to Home.')
      props.history.push('/')
    }
  }

  export default handleNoId