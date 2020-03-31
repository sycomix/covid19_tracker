const validate = values => {
  const errors = {}
  if (!values.country) {
    errors.country = 'Required'
  }
  if (!values.city) {
    errors.city = 'Required'
  }
  if (!values.neighborhood) {
    errors.neighborhood = 'Required'
  }
  return errors
}

export default validate
