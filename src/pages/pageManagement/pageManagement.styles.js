import { Typography } from '@mui/material';
import styled from 'styled-components';

export const EditorWrap = styled(({ theme, ...otherProps }) => <div {...otherProps} />)`
  height: 500px;
  margin-top: 1rem;
  border: 1px solid #eee;
`;
export const MetaText = styled(({ theme, ...otherProps }) => <p {...otherProps} />)`
  color: rgba(0, 0, 0, 0.4);
  padding: 2px 3px;
  text-transform: capitalize;
  margin: 3px 0;
`;

// export const TextArea = styled(({ theme, ...otherProps }) => <textarea {...otherProps} />)`
//   display: ${(props) => (props.show ? '' : 'none')};
// `;

export const TextArea = styled('textarea').withConfig({
  shouldForwardProp: (prop) => prop !== 'show',
})`
  display: ${(prop) => (prop.show ? '' : 'none')};
  background: #eee; 
  width: inherit; 
  height: 500px;
  border: none; 

  textarea:focus{
    border: none; 
  }
`;
