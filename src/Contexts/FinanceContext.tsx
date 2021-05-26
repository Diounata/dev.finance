import { createContext, ReactNode, useContext, useState } from 'react';

export const FinanceContext = createContext({} as ContextProps);

interface ChildrenProps {
    children: ReactNode;
}

interface FinanceProps {
    description: string;
    value: number;
    date: string;
}

interface ContextProps {
    finance: FinanceProps[];

    addFinance(value): void;
    deleteFinance(value): void;
}

export function FinanceContextProvider({ children }: ChildrenProps) {
    const [finance, setFinance] = useState([
        {
            description: 'Website development',
            value: 3500,
            date: '01/01/2022',
        },

        {
            description: 'Apartment renting',
            value: -1000,
            date: '01/01/2022',
        },

        {
            description: 'Computer',
            value: -400,
            date: '01/01/2022',
        },
    ]);

    function updateFinance(value: FinanceProps[]): void {
        setFinance(value);
    }

    function addFinance(value: FinanceProps): void {
        const newArray = [value, ...finance];
        updateFinance(newArray);
    }

    function deleteFinance(index: number): void {
        const filteredFinance = finance.filter((f, i) => index !== i);
        updateFinance(filteredFinance);
    }

    return (
        <FinanceContext.Provider value={{ finance, addFinance, deleteFinance }}>
            {children}
        </FinanceContext.Provider>
    );
}

export function useFinance() {
    return useContext(FinanceContext);
}
