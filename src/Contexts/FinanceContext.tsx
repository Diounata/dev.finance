import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';

export const FinanceContext = createContext({} as ContextProps);

interface ChildrenProps {
    children: ReactNode;
}

interface FinanceProps {
    description: string;
    value: number;
    date: string;
}

interface CardsValueProps {
    income: number;
    expense: number;
    total: number;
}

interface ContextProps {
    finance: FinanceProps[];
    cardsValue: CardsValueProps;

    addFinance(value): void;
    deleteFinance(value): void;
}

export function FinanceContextProvider({ children }: ChildrenProps) {
    const [finance, setFinance] = useState([]);
    const [cardsValue, setCardsValue] = useState({} as CardsValueProps);

    function updateFinance(value: FinanceProps[]): void {
        setFinance(value);
        localStorage.setItem('storagedFinance', JSON.stringify(value));
    }

    function addFinance(value: FinanceProps): void {
        const newArray = [value, ...finance];
        updateFinance(newArray);
    }

    function deleteFinance(index: number): void {
        const filteredFinance = finance.filter((f, i) => index !== i);
        updateFinance(filteredFinance);
    }

    useEffect(() => {
        let newValue = { income: 0, expense: 0, total: 0 };

        finance.forEach(f => {
            f.value > 0
                ? (newValue.income += f.value)
                : (newValue.expense += f.value);

            newValue.total += f.value;
        });

        setCardsValue(newValue);
    }, [finance]);

    useEffect(() => {
        if (localStorage.getItem('storagedFinance')) {
            updateFinance(JSON.parse(localStorage.getItem('storagedFinance')));
        }
    }, []);

    return (
        <FinanceContext.Provider
            value={{
                finance,
                cardsValue,
                addFinance,
                deleteFinance,
            }}
        >
            {children}
        </FinanceContext.Provider>
    );
}

export function useFinance() {
    return useContext(FinanceContext);
}
