import React from 'react'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Footer: React.FC = () => {

  return (
    <footer>
      <div 
        className="footer-description"
        css={
            css`
                padding: 16px 0px;
                overflow: hidden;
                position: absolute;
                width: 100%;
                text-align: center;
                bottom: 0px;
                color: #f89541;
                background: #000;
            `
        }>
       <span>{`</>`}</span><span> with <a href="https://reactjs.org" target="_blank">React.js</a> &amp; <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a></span>
      </div>
    </footer>
  )
}

export default Footer;
