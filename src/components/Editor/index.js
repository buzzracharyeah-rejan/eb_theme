import React, { useContext, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useEditorContext } from '../../context/EditorContext';

const TextEditor = () => {
  const { HTMLButton, editorState, setEditorState, rawHTML, convertToHTML, convertToEditorState } =
    useEditorContext();

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  useEffect(() => {
    if (HTMLButton === true) {
      convertToHTML(editorState);
    } 
  }, [HTMLButton]);

  return (
    <div style={{background: '#eee', display: !HTMLButton ? '': 'none' }}>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
      />
    </div>
  );
};

export default TextEditor;
