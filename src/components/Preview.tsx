import React from 'react'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { RowFlex, ColumnFlex } from './shared'

function Preview() {
    return (
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
    )
}

export default Preview;