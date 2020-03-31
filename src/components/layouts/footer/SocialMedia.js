import React from 'react'
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'

import styled from '@emotion/styled'

const CustomSocialMedia = styled.ul`
  list-style-type: none;
  display: inline-flex;
  margin-top: 20px;

  li {
    margin: 0 15px;
  }
  a { color: white} 
`

const SocialMedia = () => (
  <CustomSocialMedia >
    <li>
      <a rel="noopener noreferrer" target="_blank" className="facebook" href="https://www.facebook.com/MindsDB/">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a rel="noopener noreferrer" target="_blank" className="facebook" href="https://github.com/mindsdb">
        <FaGithub/>
      </a>
    </li>
    <li>
      <a rel="noopener noreferrer" target="_blank" className="facebook" href="https://twitter.com/mindsdb">
        <FaTwitter />
      </a>
    </li>
  </CustomSocialMedia>
)

export default SocialMedia
