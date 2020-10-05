import React from 'react';
import {
  MainModal,
  ModalInner,
  ModalHeader,
  ModalInnerWrapper,
  ModalFooter,
  Overlay,
} from './styles';

const Popup = (props) => {
  const {
    open,
    title,
    onClose,
    addBtn,
    addPerson,
    children,
  } = props;
  return (
    <MainModal className={open ? 'open' : ''}>
      <ModalInner>
        <ModalHeader>
          {title}
          <span onClick={onClose}>×</span>
        </ModalHeader>
        <ModalInnerWrapper>
          {children}
        </ModalInnerWrapper>
        <ModalFooter>
          <button type="button" onClick={onClose}>Back</button>
          {addBtn && (
            <button type="button" onClick={addPerson}>Add</button>
          )}
        </ModalFooter>
      </ModalInner>
      <Overlay onClick={onClose} />
    </MainModal>
  );
};

export default Popup;
