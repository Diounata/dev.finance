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

export default function NewFinanceModal() {
    const { isModalOpen, changeModalState } = useModal();
    const { addFinance } = useFinance();

    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [date, setDate] = useState('');

    function add() {
        const newFinance: FinanceProps = {
            description,
            value: Number(value),
            date: {
                domString: date,
                formatted: date.split('-').reverse().join('/'),
            },
        };

        addFinance(newFinance);
        changeModalState(false);

        setDescription('');
        setValue('');
        setDate('');
    }

    return (
        <div className={isModalOpen ? styles.modalContainer : styles.closed}>
            <div>
                <h2>New transation</h2>

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

                    <button onClick={add} disabled={description && value && date ? false : true}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
