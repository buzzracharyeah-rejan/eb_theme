import { Modal as MuiModal, Box as MuiBox } from '@mui/material';
import styled from 'styled-components';

export const Modal = styled(({ theme, ...otherProps }) => <MuiModal {...otherProps} />)`
`;

export const Box = styled(({ theme, ...otherProps }) => <MuiBox {...otherProps} />)`
border-radius: 4px;
border-top-left-radius: 2rem;
border-bottom-right-radius: 2rem;
width: 500px !important;
`;


