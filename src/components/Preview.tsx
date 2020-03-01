import React from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { ColumnFlex } from './shared'

interface Props {
    markdownContent: string
}

const Preview: React.FC<Props> = ({ markdownContent }) => {
    const mardownFormattedContent = ( marked(markdownContent));

    return (
        <ColumnFlex
            id="preview"
            css={css`
            flex: 1;
            padding: 16px;
            `}
        >
            <h2>Preview</h2>
            <div
                css={css`
        height: 100%;
        border-radius: 4px;
        border: 1px solid #eee;
        font-size: 100%;
        line-height: inherit;
        padding: 8px;
      `}
      dangerouslySetInnerHTML={{__html: mardownFormattedContent}}
      >
            </div>
        </ColumnFlex>
    )
}

Preview.propTypes = {
    markdownContent: PropTypes.string.isRequired
  }

export default Preview;