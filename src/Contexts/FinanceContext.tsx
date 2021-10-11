import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import * as sampleEditingPlayer from '@utils/sampleEditingPlayer.json';
import { useModal } from './ModalContext';

export const FinanceContext = createContext({} as ContextProps);

interface ChildrenProps {
    children: ReactNode;
}

interface FinanceProps {
    description: string;
    value: number;
    date: {
        domString: string;
        formatted: string;
    };
}

interface FinanceCardProps {
    income: number;
    expense: number;
    total: number;
}

interface EditingFinanceProps extends FinanceProps {
    id: number;
}

interface ContextProps {
    finance: FinanceProps[];
    financeCard: FinanceCardProps;
    editingFinance: EditingFinanceProps;

    addFinance(value: FinanceProps): void;
    deleteFinance(index: number): void;
    editFinance(newFinance: FinanceProps, index: number): void;
    updateEditingFinance(id: number): void;
}

export function FinanceContextProvider({ children }: ChildrenProps) {
    const [finance, setFinance] = useState<FinanceProps[]>([
        {
            description: 'Website development',
            value: 3500,
            date: {
                domString: '2022-01-01',
                formatted: '01/01/2022',
            },
        },
    ]);
    const [financeCard, setFinanceCard] = useState({} as FinanceCardProps);
    const [editingFinance, setEditingFinance] = useState<EditingFinanceProps>(sampleEditingPlayer);

    const { selectModal } = useModal();

    function addFinance(value: FinanceProps): void {
        const newArray = [value, ...finance];

        setFinance(newArray);
    }

    function deleteFinance(index: number): void {
        const newFinance = finance.filter((f, key) => index !== key);

        setFinance(newFinance);
    }

    function editFinance(newFinance: FinanceProps, index: number): void {
        const newFinanceObject = finance.map((finance, key) => (index === key ? newFinance : finance));

        setFinance(newFinanceObject);
    }

    function updateEditingFinance(id: number): void {
        const newEditingFinance = { ...finance[id], id };

        setEditingFinance(newEditingFinance);
        selectModal('edit');
    }

    useEffect(() => {
        let newValue = { income: 0, expense: 0, total: 0 };

        finance.forEach(f => {
            if (f.value > 0) {
                newValue.income += f.value;
            } else {
                newValue.expense += f.value;
            }

            newValue.total += f.value;
        });

        setFinanceCard(newValue);
    }, [finance]);

    return (
        <FinanceContext.Provider
            value={{
                finance,
                financeCard,
                editingFinance,
                addFinance,
                deleteFinance,
                editFinance,
                updateEditingFinance,
            }}
        >
            {children}
        </FinanceContext.Provider>
    );
}

export function useFinance() {
    return useContext(FinanceContext);
}
