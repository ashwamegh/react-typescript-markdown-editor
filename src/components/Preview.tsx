import React from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { ColumnFlex } from './shared'

interface Props {
    markdownContent: string,
    theme: string
}

const Preview: React.FC<Props> = ({ markdownContent, theme }) => {
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
                css={theme === 'dark'
                ? css`
                height: 100%;
                border-radius: 4px;
                border: none;
                box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
                font-size: 100%;
                line-height: inherit;
                overflow: auto;
                background: #000;
                padding: 8px 16px;
                color: #fff;
                `
                : css`
                height: 100%;
                border-radius: 4px;
                border: none;
                box-shadow: 2px 2px 10px #999;
                font-size: 100%;
                line-height: inherit;
                overflow: auto;
                background: #fff;
                padding: 8px 16px;
                color: #000;
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