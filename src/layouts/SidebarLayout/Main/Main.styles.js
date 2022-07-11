import { Box } from '@mui/material';
import styled from 'styled-components';

export const MainWrapper = styled(({ themes, ...otherProps }) => <Box {...otherProps} />)`
  position: relative;
  top: 4rem;
  background: #f3f3f3;
  left: ${(props) => props.open ? '0rem' : '-10.5rem' };
  transition: left 0.2s ease-out;
`;
