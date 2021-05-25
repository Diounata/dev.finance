import { createContext, ReactNode, useContext, useState } from 'react';

export const ModalContext = createContext({} as ModalProps);

interface ChildrenProps {
    children: ReactNode;
}

interface ModalProps {
    isModalOpen: boolean;
    changeModalState(value: boolean): void;
}

export function ModalContextProvider({ children }: ChildrenProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function changeModalState(value: boolean) {
        setIsModalOpen(value);
    }

    return (
        <ModalContext.Provider value={{ isModalOpen, changeModalState }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    return useContext(ModalContext);
}
