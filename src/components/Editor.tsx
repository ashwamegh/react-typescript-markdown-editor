import React, { ChangeEvent } from 'react'
import PropTypes from 'prop-types';

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { ColumnFlex } from './shared'

interface Props {
  markdownContent: string;
  setMarkdownContent: (value: string) => void;
}

const Editor: React.FC<Props> = ({ markdownContent, setMarkdownContent }) => {
    return (
        <ColumnFlex
        id="editor"
        css={css`
            flex: 1;
            padding: 16px;
          `}>
        <h2>
        Editor
        </h2>
        <textarea
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMarkdownContent(e.target.value)}
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
          value={markdownContent}
          />
      </ColumnFlex>
    )
}

Editor.propTypes = {
  markdownContent: PropTypes.string.isRequired,
  setMarkdownContent: PropTypes.func.isRequired,
}

export default Editor;