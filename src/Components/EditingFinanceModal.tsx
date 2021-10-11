import { useState } from 'react';
import styles from '../styles/Modal.module.scss';

import { useModal } from '../Contexts/ModalContext';
import { useFinance } from '../Contexts/FinanceContext';

interface FinanceProps {
    description: string;
    value: number;
    date: {
        formatted: string;
        domString: string;
    };
}

export default function EditingFinanceModal() {
    const { isModalOpen, changeModalState } = useModal();
    const { editingFinance, editFinance } = useFinance();

    const [description, setDescription] = useState(editingFinance.description);
    const [value, setValue] = useState(String(editingFinance.value));
    const [date, setDate] = useState(editingFinance.date.domString);

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

    return (
        <div className={isModalOpen ? styles.modalContainer : styles.closed}>
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
        </div>
    );
}
