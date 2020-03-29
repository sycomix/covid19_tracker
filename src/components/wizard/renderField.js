import React from 'react'

import styled from '@emotion/styled'
import { Colors } from '@/components/layouts/utils/theme'

const FieldContainer = styled.div`
  span {
    color: ${Colors.burntSienna};
  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
`

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <FieldContainer>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </FieldContainer>
)

export default renderField
