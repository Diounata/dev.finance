import { createContext, ReactNode, useContext, useState } from 'react';

export const ModalContext = createContext({} as ContextProps);

interface ChildrenProps {
    children: ReactNode;
}

type SelectedModalProps = 'add' | 'edit';

interface ContextProps {
    isModalOpen: boolean;
    selectedModal: SelectedModalProps;

    changeModalState(value: boolean): void;
    selectModal(newSelectedModal: SelectedModalProps): void;
}

export function ModalContextProvider({ children }: ChildrenProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedModal, setSelectedModal] = useState<SelectedModalProps>('add');

    function changeModalState(value: boolean): void {
        setIsModalOpen(value);
    }

    function selectModal(newSelectedModal: SelectedModalProps): void {
        setSelectedModal(newSelectedModal);
        setIsModalOpen(true);
    }

    return (
        <ModalContext.Provider value={{ isModalOpen, selectedModal, changeModalState, selectModal }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    return useContext(ModalContext);
}
