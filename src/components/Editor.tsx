import React from 'react'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { ColumnFlex } from './shared'

function Editor () {
    return (
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
    )
}

export default Editor;