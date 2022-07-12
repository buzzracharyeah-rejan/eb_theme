import React, { useState, createContext } from 'react';

export const ModalContext = createContext(null);

const ModalContextProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  /* to toggle the modal */
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleModalOpen = () => {
    console.log('modal open', modalOpen)
    setModalOpen(true)
  }

  const handleModalClose = () => {
    console.log('modal close', modalOpen)
    setModalOpen(false)
  }

  return (
    <ModalContext.Provider value={{ modalOpen, toggleModal, handleModalClose, handleModalOpen }}>{children}</ModalContext.Provider>
  );
};

export default ModalContextProvider;
