const validate = values => {
  const errors = {}
  if (!values.feeling) {
    errors.feeling = "Required"
  }
  if (!values.gender) {
    errors.gender = "Required"
  }
  if (!values.smoker) {
    errors.smoker = "Required"
  }
  if (!values.hypertension) {
    errors.hypertension = "Required"
  }
  if (!values.diabetes) {
    errors.diabetes = "Required"
  }
  if (!values.coronaryHeartDesease) {
    errors.coronaryHeartDesease = "Required"
  }
  if (!values.fatigue) {
    errors.fatigue = "Required"
  }
  if (!values.breathingProblems) {
    errors.breathingProblems = "Required"
  }
  if (!values.cough) {
    errors.cough = "Required"
  }
  if (!values.sputum) {
    errors.sputum = "Required"
  }
  if (!values.respiratoryRate) {
    errors.respiratoryRate = "Required"
  }
  if (!values.fever) {
    errors.fever = "Required"
  }
  if (!values.myalgia) {
    errors.myalgia = "Required"
  }
  if (!values.nausea) {
    errors.nausea = "Required"
  }
  if (!values.diarrhoea) {
    errors.diarrhoea = "Required"
  }
  if (!values.exposed) {
    errors.exposed = "Required"
  }

  return errors
}

export default validate
