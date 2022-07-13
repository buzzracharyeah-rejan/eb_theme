import React from 'react';
import { Box, Button, FormControlLabel, Paper, Switch, Typography } from '@mui/material';
import Editor from '../../components/Editor';
import { EditorWrap, MetaText, SubmitButton, TextArea } from './pageManagement.styles';
import { useEditorContext } from '../../context/EditorContext';
import { useEffect } from 'react';

const PageManagement = () => {
  const { HTMLButton, toggleHTMLButton, rawHTML, setRawHTML, convertToEditorState } =
    useEditorContext();
  const handleChange = (event) => {
    setRawHTML(event.target.value);
  };

  useEffect(() => {
    if (!HTMLButton) {
      convertToEditorState(rawHTML);
    }
  }, [HTMLButton]);

  return (
    <Box sx={{ marginTop: '2em', }}>
      <MetaText>title</MetaText>
      <Paper elevation={1}>
        <Typography
          sx={{ padding: '4px', mx: '1rem', textTransform: 'capitalize' }}
          component='h1'
          variant='h6'
        >
          Terms and conditions
        </Typography>
      </Paper>
      <MetaText>convert</MetaText>
      <FormControlLabel
        sx={{ px: '4px' }}
        control={<Switch onClick={toggleHTMLButton} />}
        label='Show HTML'
      />
      <EditorWrap>
        <Editor />
        <TextArea show={HTMLButton} value={rawHTML} onChange={handleChange} />
      </EditorWrap>
      <SubmitButton fullWidth variant='contained'>Submit</SubmitButton>
    </Box>
  );
};

export default PageManagement;
