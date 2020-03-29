import React, { useState } from 'react'

const Wizard = () => {
  const dummySteps = [
    {
      stepIndex: 0,
      name: 'step 1',
    },
    {
      stepIndex: 1,
      name: 'step 2',
    },
  ]

  const [stepIndex, setStep] = useState(0)

  const handleStep = () => {
    switch (stepIndex) {
      case 0:
        return (
        <div>Step 1</div>
        )
      case 1:
        return (
        <div>Step 2</div>
        )
      default:
        return (
        <div>Step 1</div>
        )
    }
  }

  return (
    <div>
      {handleStep()}
      <button onClick={() => setStep(stepIndex > 0 ? stepIndex - 1 : 0)}>
        previous
      </button>
      <button onClick={() => setStep(stepIndex < dummySteps.length - 1 ? stepIndex + 1 : dummySteps.length - 1)}>
        next
      </button>
    </div>
  )
}

export default Wizard
