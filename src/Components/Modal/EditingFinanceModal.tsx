import { useEffect, useState } from 'react';

import { useModal } from '@Contexts/ModalContext';
import { useFinance } from '@Contexts/FinanceContext';

interface FinanceProps {
    description: string;
    value: number;
    date: {
        formatted: string;
        domString: string;
    };
}

export default function EditingFinanceModal() {
    const { changeModalState } = useModal();
    const { editingFinance, editFinance } = useFinance();

    const [description, setDescription] = useState<string>();
    const [value, setValue] = useState<string>();
    const [date, setDate] = useState<string>();

    function edit(): void {
        const newFinance: FinanceProps = {
            description,
            value: Number(value),
            date: {
                domString: date,
                formatted: date.split('-').reverse().join('/'),
            },
        };

        editFinance(newFinance, editingFinance.id);
        changeModalState(false);
    }

    useEffect(() => {
        setDescription(editingFinance.description);
        setValue(String(editingFinance.value));
        setDate(editingFinance.date.domString);
    }, [editingFinance]);

    return (
        <>
            <div>
                <h2>Edit transaction</h2>

                <div>
                    <input
                        type="text"
                        placeholder="Description"
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    />

                    <input
                        type="number"
                        id="money-input"
                        placeholder="0,00"
                        onChange={e => setValue(e.target.value)}
                        value={value}
                    />
                    <label htmlFor="money-input">
                        Use - (line) for expenses and , (comma) for decimal place.
                    </label>

                    <input type="date" onChange={e => setDate(e.target.value)} value={date} />
                </div>

                <div>
                    <button onClick={() => changeModalState(false)}>Cancel</button>

                    <button onClick={edit} disabled={description && value && date ? false : true}>
                        Edit
                    </button>
                </div>
            </div>
        </>
    );
}
