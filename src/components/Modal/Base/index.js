import React, { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';

import {Modal, Box} from './Base.styles'

const BaseModal = ({children}) => {
  const { modalOpen, handleModalClose } = useContext(ModalContext);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 4,
  };

  return (
    <Modal
      open={modalOpen}
      onClose={handleModalClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        {children}
      </Box>
    </Modal>
  );
};

export default BaseModal;
