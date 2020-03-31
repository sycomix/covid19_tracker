import React, { useState } from 'react'
import PropTypes from 'prop-types'

import WizardFormFirstPage from './WizardFormFirstPage'
import WizardFormDynamicPage from './WizardFormDynamicPage'
import { questions } from './questions.json'

const WizardForm = (props) => {
  const { onSubmit } = props

  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1)
  }

  const previousPage = () => {
    setPage(page - 1)
  }

  const getDynamicStep = () => {
    const stepProps = questions.find((item) => page === item.page)

    if (stepProps && stepProps.page) {
      return (
        <WizardFormDynamicPage
          stepProps={stepProps}
          previousPage={previousPage}
          onSubmit={stepProps.isLastStep ? onSubmit : nextPage}
        />
      )
    }

    return null
  }

  return (
    <>
      {page === 1 && <WizardFormFirstPage onSubmit={nextPage} />}
      {getDynamicStep()}
    </>
  )
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm
