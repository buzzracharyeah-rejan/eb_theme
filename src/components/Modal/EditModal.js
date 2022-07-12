import { Typography } from '@mui/material';
import React from 'react';
import EditForm from '../Form/EditForm';
import BaseModal from './Base';

const EditModal = (props) => {
  console.log(`edit modal props: ${JSON.stringify(props.payload)}`);
  return (
    <BaseModal>
      <EditForm payload={props.payload}/>
    </BaseModal>
  );
};

export default EditModal;
