import {
  Container,
  Paper,
  Table as MuiTable,
  TableContainer as MuiTableContainer,
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
  TableBody as MuiTableBody,
  TableCell as MuiTableCell,
  IconButton,
} from '@mui/material';

import styled from 'styled-components';

export const TableContainer = styled(({ themes, ...otherProps }) => (
  <MuiTableContainer {...otherProps} />
))``;
export const Table = styled(({ themes, ...otherProps }) => <MuiTable {...otherProps} />)``;
export const TableRow = styled(({ themes, ...otherProps }) => <MuiTableRow {...otherProps} />)``;
export const TableHead = styled(({ themes, ...otherProps }) => <MuiTableHead {...otherProps} />)`
`;
export const TableBody = styled(({ themes, ...otherProps }) => <MuiTableBody {...otherProps} />)``;
export const TableCell = styled(({ themes, ...otherProps }) => <MuiTableCell {...otherProps} />)`
  text-transform: capitalize;
  .MuiTableCell-root {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  img {
    height: 100px; 
    width: 100px;
  }
`;
