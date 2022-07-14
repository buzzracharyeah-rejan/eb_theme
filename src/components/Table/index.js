import React, { useContext, useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import orderBy from 'lodash/orderBy';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableWrapper,
} from './Table.styles';
import { ModalContext } from '../../context/ModalContext';
import EditModal from '../Modal/EditModal';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const TableComponent = ({ dataset, headers, tableMeta, handleSort }) => {
  const { modalOpen, handleModalOpen } = useContext(ModalContext);
  const [payload, setPayload] = useState(null);

  const handleEdit = (data) => {
    if (data) {
      setPayload(data);
      handleModalOpen();
    }
    // console.log(`handle edit \n ${data.id + data.title}`);
  };

  const handleDelete = (product) => {
    // console.log(`handle delete \n ${''.concat(product.id, ' ', product.title)}`);
  };

  return (
    <>
      {modalOpen && <EditModal payload={payload} />}
      <TableWrapper>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((colName, index) => (
                  <TableCell key={index} onClick={() => handleSort(colName)}>
                    <div style={{display:'flex', gap: '2px', alignItems: 'center'}}>
                      {colName}
                      <span>
                        {tableMeta.colToSort === colName && tableMeta.sortDir === 'asc' ? (
                          <ArrowDropDownIcon />
                        ) : (
                          <ArrowDropUpIcon />
                        )}
                      </span>
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {dataset.map((row) => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>
                    <img src={row.image} />
                  </TableCell>
                  <TableCell>{row.rating}</TableCell>
                  <TableCell>
                    <div>
                      <IconButton onClick={() => handleEdit(row)} color='success'>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(row)} color='error'>
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableWrapper>
    </>
  );
};

export default TableComponent;
