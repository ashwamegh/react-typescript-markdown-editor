import React from 'react'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { RowFlex, ColumnFlex } from './shared'


function Editor() {
  return (
    <RowFlex
      css={css`
        padding: 32px;
        height: calc(100vh - 240px);
        `}>
      <ColumnFlex
      css={css`
          flex: 1;
          padding: 16px;
        `}>
        <h2>
        Editor
        </h2>
        <textarea
          css={css`
            height: 100%;
            border-radius: 4px;
            border: 1px solid #eee;
            font-size: 100%;
            line-height: inherit;
            padding: 8px;
            resize: none;
            &:focus {
              outline: none;
            }
          `}
          rows={9}
          />
      </ColumnFlex>
      <ColumnFlex
        css={css`
          flex-grow: 1;
          padding: 16px;
        `}>
      <h2>Preview</h2>
      <div
      css={css`
        height: 100%;
        border-radius: 4px;
        border: 1px solid #eee;
        font-size: 100%;
        line-height: inherit;
        padding: 8px;
      `}>
      </div>
      </ColumnFlex>
    </RowFlex>
  )
}

export default Editor;
