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
  input {
    border: ${props => props.error ? `1px solid ${Colors.burntSienna}` : 'auto'};
  }
`

const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
  <FieldContainer error={touched && error}>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder || label} type={type} />
    </div>
  </FieldContainer>
)

export default renderField
