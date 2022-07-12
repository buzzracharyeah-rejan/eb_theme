import { Button } from '@mui/material';
import styled from 'styled-components';

export const CustomButton = styled(({ theme, ...otherProps }) => <Button {...otherProps} />)`
  width: 100px;
  padding: 8px 2rem !important;
`;

export const FileUploadButton = styled(({ theme, ...otherProps }) => <Button {...otherProps} />)`
  padding: 1rem;
  margin-left: 2rem !important; 
`;


export const CustomFormControl = styled(({theme, ...otherProps}) => <div {...otherProps} />)`
margin: 1rem 0;
padding: 2px 3px; 
`