import { createContext, JSX, useContext, useState } from 'react';

const ModalContext = createContext({
    modalType:  '', 
    modalProps: {},
    openModal: (type: any, props?: {}) => {},
    closeModal: () => {} ,
});
interface ModalProviderProps{
children: React.ReactNode
}

export const  ModalProvider: React.FC<ModalProviderProps> = ({children }) => {
    const [modalType, setModalType] = useState('');
  const [modalProps, setModalProps] = useState({});

  function openModal(type: 'update' | 'create', props = {}) {
    setModalType(type);
    setModalProps(props);
  }

  function closeModal() {
    setModalType('');
    setModalProps({});
  }

  return (
    <ModalContext.Provider value={{ modalType, modalProps, openModal, closeModal}}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}