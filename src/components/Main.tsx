import React from 'react'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { RowFlex, ColumnFlex } from './shared'
import Editor from './Editor';
import Preview from './Preview';

function Main() {
  return (
    <RowFlex
      css={css`
        padding: 32px;
        height: calc(100vh - 240px);
        `}>
      <Editor />
      <Preview />
    </RowFlex>
  )
}

export default Main;
