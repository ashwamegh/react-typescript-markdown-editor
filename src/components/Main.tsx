import React, { useState } from 'react'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { RowFlex } from './shared'
import Editor from './Editor';
import Preview from './Preview';

const Main: React.FC =  () => {
  const [markdownContent, setMarkdownContent] = useState<string>(`
  # H1
  ## H2
  ### H3
  #### H4
  ##### H5

  __bold__
  **bold**
  _italic_
  `);
  console.log(markdownContent);
  return (
    <RowFlex
      css={css`
        padding: 32px;
        height: calc(100vh - 240px);
        `}>
      <Editor markdownContent={markdownContent} setMarkdownContent={setMarkdownContent}/>
      <Preview markdownContent={markdownContent}/>
    </RowFlex>
  )
}

export default Main;
