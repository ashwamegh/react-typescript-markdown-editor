import React from 'react'
import { FiSun } from 'react-icons/fi'
import { FaMoon } from 'react-icons/fa'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'


function Header() {
  const theme = 'night';

  return (
    <header
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #f8f541;
        padding: 32px;
        font-size: 16px;
    `}>
      <div className="header-title">
        Markdown Editor
      </div>
      <div>
       {
         theme === 'night'?
         <FaMoon />:
         <FiSun />
       }
      </div>
    </header>
  )
}

export default Header;
