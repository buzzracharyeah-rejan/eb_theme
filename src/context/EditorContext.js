import React, { useState, createContext, useContext } from 'react';

import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHTML from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import htmlToDraft from 'html-to-draftjs';

export const EditorContext = createContext(null);
let useEditorContext;

const EditorContextProvider = ({ children }) => {
  /* state and handlers */

  /* state in use: page management */
  useEditorContext = () => useContext(EditorContext);
  const [HTMLButton, setHTMLButton] = useState(false);

  const toggleHTMLButton = () => {
    setHTMLButton(!HTMLButton);
  };

  /* state in use: editor component */
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [rawHTML, setRawHTML] = useState('');

  const convertToHTML = (editorState) => {
    const rawHTML = draftToHTML(convertToRaw(editorState.getCurrentContent()));
    console.log(rawHTML);
    setRawHTML(rawHTML);
  };

  const convertToEditorState = (rawHTML) => {
    const blocksFromHtml = htmlToDraft(rawHTML);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const editorState = EditorState.createWithContent(contentState);
    console.log(editorState);
    setEditorState(editorState);
  };

  return (
    <EditorContext.Provider
      value={{
        HTMLButton,
        toggleHTMLButton,
        editorState,
        setEditorState,
        rawHTML,
        setRawHTML,
        convertToHTML,
        convertToEditorState,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export { EditorContextProvider as default, useEditorContext };
